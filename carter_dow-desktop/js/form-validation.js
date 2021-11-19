const email = document.getElementById("email");
const firstName = document.getElementById("first__name");
const btn = document.getElementById("form__button");

form.addEventListener('input', () => {
    checkIfEmpty();
});

checkIfEmpty = () => {
    const emailValue = email.value.trim();
    const firstNameValue = firstName.value.trim();
    if(emailValue.length <= 1 || firstNameValue.length <= 1){
       btn.disabled = true;
    }  else {
        btn.disabled = false;
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const emailValue = email.value.trim();
    let checkMailValue = checkMail(emailValue);
    if(checkMailValue === false) {
        email.value = "";
        email.placeholder = "Invalid email";
        email.classList.add('error');
    }
}

function checkMail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
}