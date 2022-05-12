import { Http } from '../services';
import { AuthView } from '../views';
 
class AuthModule {
  constructor() {
    this.authView = new AuthView({
      signIn: this.signIn.bind(this),
      register: this.register.bind(this)
    });
  }

  async signIn(e) {
    e.preventDefault();
    const reqBody = AuthView.getRequestBodyFromForm(this.authView.signInFormEl);
    const { user, token } = await Http.post({
      url: '/user/login',
      body: reqBody,
    });
  }

  async register(e) {
    e.preventDefault();
    const reqBody = AuthView.getRequestBodyFromForm(this.authView.registerFormEl);
    const { user, token } = await Http.post({
      url: '/user/register',
      body: reqBody,
    });
  }
}

export default AuthModule;