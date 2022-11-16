// Form
const form = document.querySelector('.form');

// Inputs
// Array of inputs
const inputs = document.querySelectorAll('.form__input');
// seperetly
const formName = document.querySelector('#formName');
const formSurname = document.querySelector('#formSurname');
const formEmail = document.querySelector('#formEmail');
const formPass = document.querySelector('#formPass');
const formConfirm = document.querySelector('#formConfirm');

// Values
const nameVal = formName.value;
const surnameVal = formSurname.value;
const emailVal = formEmail.value;
const passwordVal = formPass.value;
const confirmVal = formConfirm.value;

// Button
const formButton = document.querySelector('.form__btn');

// Result
const result = document.querySelector('.result');

form.onsubmit = () => {
    inputs.forEach(element => {
        if(element.value === '') {
            element.classList.add('error');
        } else {
            element.classList.remove('error');
        }
    })
    result.innerHTML = `<p> ${formName.value} </p>`
    return false;
    
}

inputs.forEach(element => {
    element.addEventListener('input', () => {
        if(element !== '') {
            element.classList.add('success')
        }
    })
})




