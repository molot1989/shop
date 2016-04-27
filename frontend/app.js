import 'babel-polyfill';
import angular from 'angular';
import router from 'angular-ui-router';
import home from './module/home/home';
import about from './module/about/about';
import user from './module/user/user';
import "./index.html";


angular
    .module('app', [about, home, user, router])
    .config(($locationProvider) => {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    })
    .controller('MainController', ['$rootScope', '$scope', '$http', function($rootScope, $scope ) {
        
    }]);
