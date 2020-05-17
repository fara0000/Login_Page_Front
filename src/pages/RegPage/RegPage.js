export default class RegPage {
    constructor () {
        this._root = document.querySelector('#root');
        this.nameInput = null;
        this.emailInput = null;
        this.passwordInput = null;
        this.confirmPassword = null;
        this.button = null;
    }

    init = () => {
        const registration = this.createDiv({class: 'registration'})
        const title = document.createElement('h1');
        title.setAttribute("class", "registration__title");
        title.innerHTML = ("Registration page");
        const form = document.createElement('form');
        form.setAttribute("class", "registration__form");
        this.nameInput = this.createInput({class: 'registration__params', type: 'text', placeholder: 'Enter your name ( Elnur )'});
        this.emailInput = this.createInput({class: 'registration__params', type: 'email', placeholder: 'Enter your email ( example@domain.com )'});
        this.passwordInput = this.createInput({class: 'registration__params', type: 'password', placeholder: 'Create your password...'});
        this.confirmPassword = this.createInput({class: 'registration__params', type: 'password', placeholder: 'Confirm your password...'});
        this.button = this.createButton({class: 'registration__submit', type: 'submit', inner: 'Register'});

        this._root.appendChild(registration);
        registration.appendChild(title);
        registration.appendChild(form);
        form.appendChild(this.nameInput);
        form.appendChild(this.emailInput);
        form.appendChild(this.passwordInput);
        form.appendChild(this.confirmPassword);
        registration.appendChild(this.button);
    }

    createDiv = params => {
        const div = document.createElement('div');
    
        div.setAttribute('class', params.class);
        params.id && (div.id = params.id);
        params.title && (div.title = params.title);
        params.textContent && (div.textContent = params.textContent);
        params.inner && (div.innerHTML = params.inner);
    
        return div;
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
        params.type && (button.type = params.type);
        params.onclick && (button.onclick = params.onclick);
    
        return button;
    }    

    createInput = params => {
        const input = document.createElement('input');
    
        input.setAttribute('class', params.class);
        params.id && (input.id = params.id);
        params.type && (input.type = params.type);
        params.placeholder && (input.placeholder = params.placeholder);
        
        return input;
    }

    createParagraph = params => {
        const paragraph = document.createElement('p');        
        paragraph.setAttribute('class', params.class);
        params.inner && (paragraph.innerHTML = params.inner);
    
        return paragraph;
    }

    createLink = params => {
        const link = document.createElement('a');        
        link.setAttribute('class', params.class);
        params.inner && (link.innerHTML = params.inner);
    
        return link;
    }
}