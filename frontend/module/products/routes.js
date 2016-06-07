import template from './template/products.html';


export default function ($stateProvider) {
    $stateProvider.state('products', {
        url: '/',
        templateUrl:  '/' + template,
        controller: 'ProductsController'
    });
};