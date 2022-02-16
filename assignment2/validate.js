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
        if (check_negation == " ") {
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
    let v_last_name = document.getElementById("registration").last_name.value;
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
        if (check_negation == " ") {
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
    let v_email = document.getElementById("registration").email.value;
    let is_at_symbol = v_email.match(/@/);
    console.log(is_at_symbol);

    // check if there is the at symbol
    if (!is_at_symbol) {
        error_boxes.error_message[2] = "Please input email";
    } else {
        let pttn_email_local_part = /^[a-zA-Z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~\.]*\@/g;
        let pttn_email_domain_part = /[\@][a-zA-Z0-9\-\.]*$/g;
        // let email_local_part = v_email.match(/^[a-zA-Z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~\.]*\@/g).join().slice(0, -1);
        // let email_domain_part = v_email.match(/[\@][a-zA-Z0-9\-\.]*$/g).join().substring(1);
        // console.log(email_local_part);
        // console.log(email_domain_part);

        // split email by at symbol
        let email_part = v_email.split('@');
        console.log(email_part);

        let email_local_part = email_part[0];
        let email_domain_part = email_part[1];
        console.log(email_local_part);
        console.log(email_domain_part);

        // split local part by a period
        email_local_part = email_local_part.split('.');
        console.log(email_local_part);

        // loop to check each part
        for (let i = 0; i < email_local_part.length; i++) {

            let factor = email_local_part[i].match(/[a-zA-Z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~\.]*/);
            console.log(factor);
            if (!factor) {
                error_boxes.error_message[2] = "Please input valid email";
            }
        }

        // split domain part by a period
        email_domain_part = email_domain_part.split('.');
        console.log(email_domain_part);

        // loop to check each part
        for (let i = 0; i < email_domain_part.length; i++) {

            let factor = email_domain_part[i].match(/[a-zA-Z0-9\-\.]*/);
            console.log(factor);
            if (!factor) {
                error_boxes.error_message[2] = "Please input valid email";
            }
        }
    }








    // } else if (1) {
    //     error_flag = true;
    //     error_boxes.error_message[2] =
    //         "Please input valid email with '@' symbol";
    //     console.log(error_flag);
    // } else {
    //     error_flag = false;
    // }
}

/**
 * [validatePostalCode validate postal code]
 *
 * @return  {[void]}  [return void]
 */
function validatePostalCode() {
    let v_postal_code = document.getElementById("registration").postal_code.value;
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
    let v_phone = document.getElementById("registration").phone.value;
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

/**
 * [validateAge validate age]
 *
 * @return  {[void]}  [return void]
 */
function validateAge() {
    let v_age = document.getElementById("registration").age.value;
    console.log(v_age);
    let pttn = /^[1]?[0-9]{2}?$/g;
    console.log(pttn);
    let result = v_age.match(pttn);
    console.log(result);
    if (!result) {
        error_flag = true;
        error_boxes.error_message[5] = "Please input valid age";
        console.log(error_flag);
    } else {
        error_flag = false;
    }
}

/**
 * [validateWebUrl validate web url]
 *
 * @return  {[void]}  [return void]
 */
function validateWebUrl() {
    let v_web_url = document.getElementById("registration").web_url.value;
    console.log(v_web_url);
    let pttn = /^(http\:\/\/|https\:\/\/)/g;
    console.log(pttn);
    let result = v_web_url.match(pttn);
    console.log(result);
    if (!result) {
        error_flag = true;
        error_boxes.error_message[6] = "Please input valid web URL";
        console.log(error_flag);
    } else {
        error_flag = false;
    }
}
