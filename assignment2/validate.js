/**
 * [validateFirstName validate first name]
 *
 * @return  {[void]}  [return void]
 */
function validateFirstName() {
    let v_first_name = document.getElementById("registration").first_name.value;
    let pttn = /^[a-zA-Z\-]+$/g;
    let negation = /\s/g;
    console.log(pttn);
    console.log(negation);
    let result = v_first_name.match(pttn);
    let check_negation = v_first_name.match(negation);
    console.log(result);
    console.log(check_negation);
    if (!result) {
        error_flag = true;
        error_boxes.error_message[0] = "Please input first name";
        console.log(error_flag);
        if (check_negation == ' ') {
            error_flag = true;
            error_boxes.error_message[0] = "First name could not include space";
            console.log(error_flag);
        }
    } else {
        error_flag = false;
    }
}

/**
 * [validateLastName validate last name]
 *
 * @return  {[void]}  [return void]
 */
 function validateLastName() {
    let v_last_name = document.getElementById('registration').last_name.value;
    let pttn = /^[a-zA-Z\-]+$/g;
    let negation = /\s/g;
    console.log(pttn);
    console.log(negation);
    let result = v_last_name.match(pttn);
    let check_negation = v_last_name.match(negation);
    console.log(result);
    console.log(check_negation);
    if (!result) {
        error_flag = true;
        error_boxes.error_message[1] = "Please input last name";
        console.log(error_flag);
        if (check_negation == ' ') {
            error_flag = true;
            error_boxes.error_message[1] = "Last name could not include space";
            console.log(error_flag);
        }
    } else {
        error_flag = false;
    }
}

/**
 * [validateEmail validate email]
 *
 * @return  {[void]}  [return void]
 */
 function validateEmail() {
    let v_email = document.getElementById('registration').email.value;
    let factor = v_email.indexOf('@');
    if (v_email == '') {
        error_flag = true;
        error_boxes.error_message[2] = 'Please input email';
        console.log(error_flag);
    } else if (factor == -1) {
        error_flag = true;
        error_boxes.error_message[2] = 'Please input valid email with \'@\' symbol';
        console.log(error_flag);
    } else {
        error_flag = false;
    }
}

/**
 * [validatePostalCode validate postal code]
 *
 * @return  {[void]}  [return void]
 */
 function validatePostalCode() {
    let v_postal_code = document.getElementById('registration').postal_code.value;
    let pttn = /^[a-zA-Z][0-9][a-zA-Z]\_[0-9][a-zA-Z][0-9]$/g;
    console.log(pttn);
    let result = v_postal_code.match(pttn);
    console.log(result);
    if (!result) {
        error_flag = true;
        error_boxes.error_message[3] = "Please input valid postal code";
        console.log(error_flag);
    } else {
        error_flag = false;
    }
}

/**
 * [validatePhone validate phone number]
 *
 * @return  {[void]}  [return void]
 */
 function validatePhone() {
    let v_phone = document.getElementById('registration').phone.value;
    console.log(v_phone);
    let pttn = /^\[?[0-9]{3}[\]\.\-]?[0-9]{3}[\.\-]?[0-9]{4}$/g;
    console.log(pttn);
    let result = v_phone.match(pttn);
    console.log(result);
    if (!result) {
        error_flag = true;
        error_boxes.error_message[4] = "Please input valid phone number";
        console.log(error_flag);
    } else {
        error_flag = false;
    }
}