import { store } from '../services';
import { USER_SECTION_ID, LOGOUT_BUTTON_ID } from '../constants';
import { generateUserTemplate } from '../templates';

class UserView {
  logoutBtn = null;

  constructor(callbacks) {
    this.callbacks = callbacks;
    this.root = document.getElementById(USER_SECTION_ID);
    store.subscribe(this);
  }

  init() {
    const { user } = store.getState();
    this.root.innerHTML = generateUserTemplate({ name: user.name, age: user.age });
    this.logoutBtn = document.getElementById(LOGOUT_BUTTON_ID);
    this.logoutBtn.addEventListener('click', this.handleLogout.bind(this));
  }

  handleLogout(e) {
    e.preventDefault();
    this.callbacks.logout();
  }

  update({ user }) {
    if (user) {
      this.init();
    } else {
      this.destroy();
    }
  }

  destroy() {
    this.root.innerHTML = '';
    this.logoutBtn.removeEventListener('click', this.handleLogout.bind(this));
    this.logoutBtn = null;
  }
}

export default UserView;