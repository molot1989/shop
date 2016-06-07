import template from './template/dress.html';


export default function ($stateProvider) {
    $stateProvider.state('dress', {
        url: '/dress',
        templateUrl:  '/' + template,
        controller: 'DressController'
    });
};