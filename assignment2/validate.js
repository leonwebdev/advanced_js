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
    // let v_regex = new RegExp(pttn, g);
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
