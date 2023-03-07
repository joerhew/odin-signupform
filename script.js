const PW_MATCH_ERROR = 'The passwords do not match. Please try again.'

let pw = document.querySelector('#pw');
let pwConfirm = document.querySelector('#pw-confirm');
let btn = document.querySelector('.submit-btn');
let warning = document.querySelector('.warning-msg');

function validateForm() {
    if (pw !== pwConfirm) {
        warning.textContent = PW_MATCH_ERROR;
        return false;
    }

    return true;
}