import ModalPage from '../ModalWindow/ModalWindow';
import * as construct from '../../construct/constructs.js';

export default class RegPage {
    constructor () {
        this._root = document.querySelector('div#root');
        this.nameInput = null;
        this.emailInput = null;
        this.passwordInput = null;
        this.confirmPassword = null;
        this.button = null;
    }

    init = () => {
        const registration = construct.createDiv({class: 'registration'});
        const title = document.createElement('h1');
        title.setAttribute("class", "registration__title");
        title.innerHTML = ("Registration Page");
        const form = document.createElement('form');
        form.setAttribute("class", "registration__form");
        this.nameInput = construct.createInput({
          id:'nameInput',
          class: 'registration__params',
          type: 'text',
          placeholder: 'Enter your name'
        });
        this.nameInput.addEventListener('keyup', () => {
            if(this.nameInput.value.length > 2) {
                this.nameInput.style.borderColor = 'green';
            } else this.nameInput.style.borderColor = 'red';
        });
        this.emailInput = construct.createInput({
          id:'emailInput',
          class: 'registration__params',
          type: 'email',
          placeholder: 'Enter your email'
        });
        this.emailInput.addEventListener('keyup', () => {
            if(this.emailInput.value.length > 10) {
                this.emailInput.style.borderColor = 'green';
            } else this.emailInput.style.borderColor = 'red';
        });
        this.passwordInput = construct.createInput({
          id:'passwordInput',
          class: 'registration__params',
          type: 'password',
          placeholder: 'Create your password...'
        });
        this.passwordInput.addEventListener('keyup', () => {
            if(this.passwordInput.value.length > 6) {
                this.passwordInput.style.borderColor = 'green';
            } else this.passwordInput.style.borderColor = 'red';
        });
        this.confirmPassword = construct.createInput({
          id:'confirmPassword',
          class: 'registration__params',
          type: 'password',
          placeholder: 'Confirm your password...'
        });
        this.confirmPassword.addEventListener('keyup', () => {
            if(this.confirmPassword.value.length > 6) {
                this.confirmPassword.style.borderColor = 'green';
            } else this.confirmPassword.style.borderColor = 'red';
        });
        this.button = construct.createInput({
          id:'regButton',
          class: 'registration__submit',
          type: 'submit'
        });
        this.button.setAttribute('value', 'REGISTER');

        this._root.appendChild(registration);
        registration.appendChild(title);
        registration.appendChild(form);
        form.appendChild(this.nameInput);
        form.appendChild(this.emailInput);
        form.appendChild(this.passwordInput);
        form.appendChild(this.confirmPassword);
        registration.appendChild(this.button);
    }

    getRegInputValue = cb => {
        this.button.addEventListener('click', () => {
            const person = {
                name: this.nameInput.value,
                email: this.emailInput.value,
                password: this.passwordInput.value,
                confirmPassword: confirmPassword.value,
            }

            cb(person);
        })

    }
}
