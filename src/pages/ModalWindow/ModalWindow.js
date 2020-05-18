import * as construct from '../../construct/constructs.js';
export default class ModalWindow {
    constructor () {
        this._root = document.querySelector('#root');
    }

    init = () => {
        const modal_div = construct.createDiv({class: 'modal_div'});
        const heading_div = construct.createDiv({class: 'heading_div'});
        const welcome_heading = construct.createParagraph({class: 'welcome_heading'});
        welcome_heading.innerHTML = `${name} WELCOME TO OUR PAGE!`;
        const input_div = construct.createDiv({class: 'input_div'});
        const password_input = construct.createInput({class: 'password_input', type: 'password', placeholder: '  CONFIRM YOUR PASSWORD'});
        const confirm_button = construct.createDiv({class: 'confirm_button'});
        confirm_button.innerHTML = 'SIGN IN';

        this._root.appendChild(modal_div);
        modal_div.appendChild(heading_div);
        heading_div.appendChild(welcome_heading);
        heading_div.appendChild(input_div);
        input_div.appendChild(password_input);
        input_div.appendChild(confirm_button);
    }
}