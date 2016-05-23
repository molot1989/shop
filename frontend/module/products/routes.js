import template from './template/products.html';


export default function ($stateProvider) {
    $stateProvider.state('products', {
        url: '/products',
        templateUrl:  '/' + template,
        controller: 'ProductsController'
    });
};