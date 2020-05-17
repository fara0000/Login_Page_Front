import AutoPage from './pages/AutoPage/AutoPage';
import RegPage from './pages/RegPage/RegPage';
import ModalWindow from './pages/ModalWindow/ModalWindow';

class View {
    constructor () {
        this._root = document.querySelector('div#root');
        this.nameInput = null;
        this.emailInput = null;
        this.passwordInput = null;
        this.confirmPassword = null;
        this.button = null;
    }

    init = () => {
        const autoPage = new AutoPage();
        autoPage.init();
    }

    getDataFromInput = cb =>{
        this.button.addEventListener('click', () => {

            const person = {
                name: this.nameInput.value,
                email: this.emailInput.value,
                password: this.passwordInput.value,
                confirmPassword: this.confirmPassword.value,
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

}

export default View;