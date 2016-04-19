import registrationTemplate from './template/registration.html';
import signinTemplate from './template/signin.html';


export default function ($stateProvider) {
    $stateProvider
        .state('registration', {
            url: '/registration',
            templateUrl: '/' + registrationTemplate,
            controller: "UserRegistrationController"
        })
        .state('signin', {
            url: '/signin',
            templateUrl: '/' + signinTemplate,
            controller: "UserSigninController"
        });
};