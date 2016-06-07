import routes from './routes';
import DressController from './controller/DressController';


export default angular
    .module('app.dress', ['ui.router'])
    .config(routes)
    .controller('DressController', DressController)
    .name;