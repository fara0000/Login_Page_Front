export default class AutoPage {
    constructor () {
        this._root = document.querySelector('#root');
        this.init();
    }

    init = () => {
        const login_heading = this.createHeading({class: 'login_heading'});
        const input_login = this.createInput({id: 'input_login', type: 'email', placeholder: 'Enter your email...'})
        const input_password = this.createInput({id: 'input_password', type: 'password', placeholder: 'Enter your password...'})
        const button = this.createButton({class: 'button'})
        const registration_p = this.createParagraph({class: 'registration_p'})
        const registration_link = this.createLink({class: 'registration_link'})
        
        login_heading.innerHTML = 'SIGN IN'
        button.innerHTML = 'Submit'
        registration_p.innerHTML = 'Not registered? '
        registration_link.innerHTML = '  Create an account'
        this._root.appendChild(login_heading);
        this._root.appendChild(input_login);
        this._root.appendChild(input_password);
        this._root.appendChild(button);
        this._root.appendChild(registration_p);
        registration_p.appendChild(registration_link);
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



