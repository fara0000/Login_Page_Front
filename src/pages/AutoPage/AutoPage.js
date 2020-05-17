import RegPage from '../RegPage/RegPage';
export default class AutoPage {
    constructor () {
        this._root = document.querySelector('#root');
    }

    init = () => {
        const container_login_page = this.createDiv({class: 'container_login_page'})
        const login_heading = this.createHeading({class: 'login_heading'});
        const input_login = this.createInput({id: 'input_login', type: 'email', placeholder: 'Enter your email...'})
        const input_password = this.createInput({id: 'input_password', type: 'password', placeholder: 'Enter your password...'})
        const button = this.createButton({class: 'button'})
        const registration_p = this.createParagraph({class: 'registration_p'})
        const registration_link = this.createLink({class: 'registration_link'})
        registration_link.addEventListener('click', () => {
            container_login_page.remove();
            this._root.appendChild(registration)
        })
        
        login_heading.innerHTML = 'SIGN IN'
        button.innerHTML = 'Submit'
        registration_p.innerHTML = 'Not registered? '
        registration_link.innerHTML = '  Create an account'
        this._root.appendChild(container_login_page)
        container_login_page.appendChild(login_heading);
        container_login_page.appendChild(input_login);
        container_login_page.appendChild(input_password);
        container_login_page.appendChild(button);
        container_login_page.appendChild(registration_p);
        registration_p.appendChild(registration_link);
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



