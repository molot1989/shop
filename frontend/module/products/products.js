import routes from './routes';
import ProductsController from './controller/ProductsController';


export default angular
    .module('app.products', ['ui.router'])
    .config(routes)
    .controller('ProductsController', ProductsController)
    .name;