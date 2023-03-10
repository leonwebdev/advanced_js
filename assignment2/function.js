// ************Global Variables******************
var error_boxes = {
    error_box: [],
    error_message: []
}

var error_flag = false;

var cookie_matrix = {
    keys: [],
    values: []
}

var form_input = {
    input_name: [],
    input_value: []
}
/**
 * [showTime : get the current Time and return a string of a formatted date]
 *
 * @return  {[formatted_date]}  [return a string of a formatted date]
 */
function showTime() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var current_day = new Date();
    console.log(current_day);

    // get the current year
    var year = current_day.getFullYear();

    // get the current month
    var month_index = current_day.getMonth();
    var month = months[month_index];
    console.log(month);

    // get current date
    var date = current_day.getDate();
    console.log(date);

    // get Day of week
    var day_of_week_index = current_day.getDay()
    var day = days[day_of_week_index];
    console.log(day);

    // get hours
    var hour_24 = current_day.getHours();
    console.log(hour_24);

    // get AM or PM
    var am_pm_str = (hour_24 < 12) ? 'AM' : 'PM';
    console.log(am_pm_str);

    // convert 24 hour to 12 hour
    var hour_12 = (hour_24 > 12) ? hour_24 - 12 : hour_24;
    console.log(hour_12);

    // pad the hour if necessary
    if (hour_12 < 10) {
        hour_12 = '0' + hour_12;
    }
    console.log(hour_12);

    // get minutes
    var minutes = current_day.getMinutes();
    console.log(minutes);
    // pad the minute if necessary
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    console.log(minutes);

    var formatted_date = `${day}, ${date} ${month} ${year}, ${hour_12}:${minutes} ${am_pm_str}`;
    console.log(formatted_date);

    return formatted_date;

}

/**
 * [validateForm validate the form]
 *
 * @param   {[event]}  e   [e the default event]
 * @param   {[this]}  el  [el the current element]
 *
 * @return  {[void]}      [return void]
 */
function validateForm(e, el) {
    // prevent submit the form
    e.preventDefault();

    // erase all data in error_boxes
    error_boxes = {
        error_box: [],
        error_message: []
    }
    console.log(error_boxes);

    // query all div.error_box
    let error_box_query = document.querySelectorAll('div.error_box');
    console.log(error_box_query);

    // initial error_boxes to assign message to it
    for (let i = 0; i < error_box_query.length; i++) {

        error_boxes.error_box[i] = error_box_query[i];
        error_boxes.error_message[i] = '';
        error_boxes.error_box[i].innerHTML = error_boxes.error_message[i];
        // console.log(error_boxes);
    }

    // validate all fields
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePostalCode();
    validatePhone();
    validateAge();
    validateWebUrl();

    // show error boxes on page
    for (let i = 0; i < error_box_query.length; i++) {

        error_boxes.error_box[i].innerHTML = error_boxes.error_message[i];
        // console.log(error_boxes);
    }
    // check if there is any error currently
    // if there is an error, stop the function
    var factor_any_error = '';
    for (let i = 0; i < error_boxes.error_message.length; i++) {
        factor_any_error += error_boxes.error_message[i];
        // console.log(factor_any_error);
    }

    if (factor_any_error != '') {
        return;
    }

    // if there is no error, let's move on
    console.log('there is no error, let\'s proceed');

    // manipulate cookie begin here
    // assign all value into form_input
    let input_name_query = document.querySelectorAll('input');
    console.log(input_name_query);

    // initial form input to get value
    for (let i = 0; i < input_name_query.length; i++) {

        form_input.input_name[i] = input_name_query[i];
        console.log(form_input.input_name);
        form_input.input_value[i] = input_name_query[i].value;
        console.log(form_input.input_value);
    }

    // assign values to cookie matrix
    cookie_matrix.keys = ['firstname', 'lastname', 'email', 'postalcode', 'phone', 'age', 'weburl'];
    console.log(cookie_matrix.keys);

    for (let i = 0; i < cookie_matrix.keys.length; i++) {

        cookie_matrix.values[i] = form_input.input_value[i];
        console.log(cookie_matrix.values);
    }

    // write cookie matrix into document.cookie and set expired time
    var expire_after = 60 * 60 * 24 * 365 * 2;
    for (let i = 0; i < cookie_matrix.keys.length; i++) {

        document.cookie = cookie_matrix.keys[i] + '=' + encodeURIComponent(cookie_matrix.values[i]) + '; Max-Age=' + expire_after;
        console.log(document.cookie);
    }
    // jump to output page
    // window.location.href = "output.html";
}













/**
 * [getCookie get information from cookie, may return two different value]
 *
 * @return  {[string]}  [return cookie_empty if there is nothing in cookie]
 * @return  {[string]}  [return cookie_extract_value_succeed if succeed to get information from cookie]
 */
function getCookie() {

    // erase all previous data prior to assign value
    cookie_matrix = {
        keys: [],
        values: []
    }
    // split cookie into individual arraies
    var cookie_array = document.cookie.split(';');
    console.log(cookie_array);

    // judge if cookie is empty
    if (cookie_array == '') {
        return 'cookie_empty';
    }

    // extract keys and values into cookie matrix
    for (let i = 0; i < cookie_array.length; i++) {
        var raw_cookie = cookie_array[i].split('=');
        console.log(raw_cookie);
        cookie_matrix.keys.push(raw_cookie[0].trim());
        cookie_matrix.values.push(decodeURIComponent(raw_cookie[1].trim()));
    }
    console.log(cookie_matrix);
    return 'cookie_extract_value_succeed';
}

/**
 * [showBlankProfile output information on page if the cookie is empty]
 *
 * @return  {[void]}  [return void]
 */
function showBlankProfile() {
    // make h1 with blank profile
    document.getElementById('output_page_h1').innerHTML = '';
    document.getElementById('output_page_h1').innerHTML = `<h1 class="output_page no_profile">Uh oh! Blank Profile?!!</h1>`;

    // make register_success_box deperacated
    document.getElementById('register_success_box').innerHTML = '';

}


/**
 * [showSuccessProfile output information on page if extract information from cookie]
 *
 * @return  {[void]}  [return void]
 */
function showSuccessProfile() {
    // make h1 with success profile
    document.getElementById('output_page_h1').innerHTML = '';
    document.getElementById('output_page_h1').innerHTML = `<h1 class="output_page">Thanks For Registering!</h1>`;

    // make register_fail_box deperacated
    document.getElementById('register_fail_box').innerHTML = '';

    // output profile extracted from cookie
    document.getElementById('profile_showbox').innerHTML = '';
    document.getElementById('profile_showbox').innerHTML = `
            <div class="showbox_item">First Name: <strong>${cookie_matrix.values[cookie_matrix.keys.indexOf('firstname')]}</strong></div>
            <div class="showbox_item">Last Name: <strong>${cookie_matrix.values[cookie_matrix.keys.indexOf('lastname')]}</strong></div>
            <div class="showbox_item">Email: <strong>${cookie_matrix.values[cookie_matrix.keys.indexOf('email')]}</strong></div>
            <div class="showbox_item">Phone: <strong>${cookie_matrix.values[cookie_matrix.keys.indexOf('phone')]}</strong></div>
            <div class="showbox_item">Postal Code: <strong>${cookie_matrix.values[cookie_matrix.keys.indexOf('postalcode')]}</strong></div>
            <div class="showbox_item">Age: <strong>${cookie_matrix.values[cookie_matrix.keys.indexOf('age')]}</strong></div>
            <div class="showbox_item">URL: <a id="weburl_showtime" href="${cookie_matrix.values[cookie_matrix.keys.indexOf('weburl')]}">${cookie_matrix.values[cookie_matrix.keys.indexOf('weburl')]}</a></div>
    `;
}

/**
 * [showIceCream output an ice cream emoji on page if user click complete]
 *
 * @return  {[void]}  [return void]
 */
function showIceCream() {
    document.getElementById('complete_award').innerHTML = '';
    document.getElementById('complete_award').innerHTML = '&#127846;';
}

/**
 * [deleteAllCookies delete all cookies and refresh page and show blank profile]
 *
 * @return  {[void]}  [return void]
 */
function deleteAllCookies() {
    // delete cookies one by one
    for (let i = 0; i < cookie_matrix.keys.length; i++) {
        document.cookie = cookie_matrix.keys[i] + '= ;Max-Age=-1';
        console.log(document.cookie);
    }
    // erase cookie matrix
    cookie_matrix = {
        keys: [],
        values: []
    }
    //  refresh the page
    window.location.href = "output.html";
}