import routes from './routes';
import UserRegistrationController from './controller/UserRegistrationController';
import UserSigninController from './controller/UserSigninController';


export default angular
    .module('app.user', ['ui.router'])
    .config(routes)
    .controller('UserRegistrationController', UserRegistrationController)
    .controller('UserSigninController', UserSigninController)
    .name;