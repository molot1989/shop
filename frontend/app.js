import 'babel-polyfill';

import angular from 'angular';
import router from 'angular-ui-router';

import home from './module/home/home';
import about from './module/about/about';
import user from './module/user/user';
import breadcrumbs from './common/service/Breadcrumbs';

import "./index.html";

angular
    .module('app', [about, home, user, breadcrumbs, router])
    .config(($locationProvider) => {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    })
    .controller('MainController', ['$rootScope', '$scope', breadcrumbs, function($rootScope, $scope, Breadcrumbs) {
        this.breadcrumbs = Breadcrumbs;

        $rootScope.$on('$stateChangeStart', () => {
        });
        $rootScope.$on('$stateChangeSuccess', () => {
        });
        $rootScope.$on('$stateChangeError', () => {
        });

    }]);