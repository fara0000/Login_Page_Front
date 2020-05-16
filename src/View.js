class View {
    constructor () {
        this._root = document.querySelector('div#root');
        this.nameInput = null;
        this.mailInput = null;
        this.passwordInput = null;
        this.confirmPassInput = null;
        this.button = null;
    }

    init = () => {
        const wrapper = document.createElement('div');
        wrapper.className = 'wrapper';
        this.nameInput = document.createElement('input');
        this.mailInput = document.createElement('input');
        this.passwordInput = document.createElement('input');
        this.confirmPassInput = document.createElement('input');
        this.nameInput.className = 'wrapper__nameInputField';
        this.mailInput.className = 'wrapper__mailInputField';
        this.passwordInput.className = 'wrapper__passwordInputField';
        this.passwordInput.type = "password";
        this.confirmPassInput.className = 'wrapper__confirmPassInputField';
        this.confirmPassInput.type = "password";
        this.button = document.createElement('button');
        this.button.className = 'wrapper__button';
        this.button.innerHTML = 'Send!';

        wrapper.append(this.nameInput);
        wrapper.append(this.mailInput);
        wrapper.append(this.passwordInput);
        wrapper.append(this.confirmPassInput);
        wrapper.append(this.button);
        this._root.append(wrapper);
    }

    getDataFromInput = cb =>{
        this.button.addEventListener('click', () => {

            const person = {
                name: this.nameInput.value,
                mail: this.mailInput.value,
                password: this.passwordInput.value,
                confirmPassword: this.confirmPassInput.value,
            }

            cb(person);
            this.clearInput();
        })
    }

    clearInput = () =>{
        this.nameInput.value = '';
        this.mailInput.value = '';
        this.passwordInput.value = '';
        this.confirmPassInput.value = '';
    }
}
export default View;