import { Http } from '../services';
import { SIGN_IN_FORM_EL, REGISTER_FORM_EL } from '../constants';

const getRequestBodyFromForm = (form) => {
  const reqBody = {};
  const inputSelectors = form.querySelectorAll('input');
  for (let index = 0; index < inputSelectors.length; index++) {
    const element = inputSelectors[index];
    const nameAttr = element.getAttribute('name');
    reqBody[nameAttr] = element.value;
  }
  return reqBody;
}
 
class Auth {
  user = null;
  constructor() {
    this.addListeners();
  }

  async signIn(e) {
    e.preventDefault();
    const reqBody = getRequestBodyFromForm(SIGN_IN_FORM_EL);
    this.user = Http.post({
      url: '/user/login',
      body: reqBody,
    });
    console.log(this.user);
  }

  async register(e) {
    e.preventDefault();
    const reqBody = getRequestBodyFromForm(REGISTER_FORM_EL)
    this.user = await Http.post({
      url: '/user/register',
      body: reqBody,
    });
    console.log('submit register');
  }

  addListeners() {
    SIGN_IN_FORM_EL.addEventListener('submit', this.signIn.bind(this))
    REGISTER_FORM_EL.addEventListener('submit', this.register.bind(this))
  }
}

export default Auth;