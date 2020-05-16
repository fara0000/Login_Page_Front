export default class ModalWindow {
    constructor () {
        this._root = document.querySelector('#root');
    }

    init = () => {
        const modal_div = this.createDiv({class: 'modal_div'});
        const heading_div = this.createDiv({class: 'heading_div'});
        const welcome_heading = this.createParagraph({class: 'welcome_heading'});
        welcome_heading.innerHTML = `${name} WELCOME TO OUR PAGE!`;
        const input_div = this.createDiv({class: 'input_div'});
        const password_input = this.createInput({class: 'password_input', type: 'password', placeholder: '  CONFIRM YOUR PASSWORD'});
        const confirm_button = this.createDiv({class: 'confirm_button'});
        confirm_button.innerHTML = 'SIGN IN';

        this._root.appendChild(modal_div);
        modal_div.appendChild(heading_div);
        heading_div.appendChild(welcome_heading);
        heading_div.appendChild(input_div);
        input_div.appendChild(password_input);
        input_div.appendChild(confirm_button);
    }

    createHeading = params => {
        const heading = document.createElement('h1');
        
        heading.setAttribute('class', params.class);
        params.inner && (heading.innerHTML = params.inner);
    
        return heading;
    }
    
    createButton = params => {
        const button = document.createElement('button');
    
        button.setAttribute('class',params.class);
        params.id && (button.id = params.id);
        params.inner && (button.innerHTML = params.inner);
        params.onclick && (button.onclick = params.onclick);
    
        return button;
    }    

    createInput = params => {
        const input = document.createElement('input');
    
        input.setAttribute('class', params.class);
        params.id && (input.id = params.id);
        params.type && (input.type = params.type);
        params.placeholder && (input.placeholder = params.placeholder);
        params.title && (input.title = params.title);
    
        return input;
    }

    createDiv = params => {
        const input = document.createElement('div');
    
        input.setAttribute('class', params.class);
        params.id && (input.id = params.id);
        params.type && (input.type = params.type);
        params.title && (input.title = params.title);
    
        return input;
    }

    createParagraph = params => {
        const input = document.createElement('h3');
    
        input.setAttribute('class', params.class);
        params.id && (input.id = params.id);
        params.type && (input.type = params.type);
        params.title && (input.title = params.title);
    
        return input;
    }
}