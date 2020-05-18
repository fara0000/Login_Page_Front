import ModalPage from '../ModalWindow/ModalWindow';
import * as construct from '../../construct/constructs.js';
export default class RegPage {
    constructor () {
        this._root = document.querySelector('div#root');
        this.registration = null;
        this.nameInput = null;
        this.emailInput = null;
        this.passwordInput = null;
        this.confirmPassword = null;
        this.button = null;
        this.modal = new ModalPage();
    }

    init = () => {
        this.registration = construct.createDiv({
        class: 'registration'
        });
        const title = document.createElement('h1');
        title.setAttribute('class', 'registration__title');
        title.innerHTML = ("Registration Page");
        const form = document.createElement('form');
        form.setAttribute('class', 'registration__form');
        this.nameInput = construct.createInput({
            id:'nameInput',
            class: 'registration__params',
            type: 'text',
            placeholder: 'Enter your name'
        });
        this.nameInput.addEventListener('keyup', () => {
            const username = /^[a-z\d]{3,12}$/i;
            if(this.nameInput.value.length > 2
            && this.nameInput.value.match(username)) {
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
            const email = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})?$/;
            if(this.emailInput.value.match(email)) {
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
            const password = /^[\d\w@-]{8,20}$/i;
            if(this.passwordInput.value.match(password)) {
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
            if(this.confirmPassword.value === this.passwordInput.value) {
                this.confirmPassword.style.borderColor = 'green';
                this.button.removeAttribute('disabled');
            } else this.confirmPassword.style.borderColor = 'red';
        });
        this.button = construct.createInput({
            id:'regButton',
            class: 'registration__submit',
            type: 'submit'
        });
        this.button.setAttribute('value', 'REGISTER');
        this.button.setAttribute('disabled', 'true');

        this._root.appendChild(this.registration);
        this.registration.appendChild(title);
        this.registration.appendChild(form);
        form.appendChild(this.nameInput);
        form.appendChild(this.emailInput);
        form.appendChild(this.passwordInput);
        form.appendChild(this.confirmPassword);
        this.registration.appendChild(this.button);
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
            this.getModalWindow();
        })
    }

    getModalWindow = () => {
            this._root.removeChild(this.registration);
            this._root.appendChild(this.modal.init());
    }
}
