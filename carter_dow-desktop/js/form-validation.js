const email = document.getElementById("email");
const firstName = document.getElementById("first__name");
const btn = document.getElementById("form__button");
const form = document.getElementById("form");


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

let thankYou = document.querySelector(".thank__you--message");
let imIn = document.querySelector(".contact__form--button");

function checkInput() {
    let emailValue = email.value.trim();
    let checkMailValue = checkMail(emailValue);
    if(checkMailValue === false) {
        let valueSave = email.value;
        email.value = "";
        email.placeholder = "Invalid email";
        email.classList.add('error');
        setTimeout(()=>{
            email.value = valueSave;
            // email.placeholder = "";
            email.classList.remove('error');
        }, 3000)
    } else {
        thankYou.classList.add("show");
        imIn.classList.add("no-show");
        form.reset();
        setTimeout(()=>{
            thankYou.classList.remove("show");
            
            setTimeout(()=>{
                imIn.classList.remove("no-show");
                btn.disabled = true;
            }, 500)
           
        }, 3000)
        
    }
    
}

function checkMail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
}