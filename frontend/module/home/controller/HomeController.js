import breadcrumbs from './../../../common/service/Breadcrumbs';

class HomeController {
    constructor($scope, Breadcrumbs) {
        this.init($scope, Breadcrumbs);
    }
    init($scope, Breadcrumbs) {
        Breadcrumbs.clear();
        $scope.title = 'Home page';
    }
}



export default ['$scope', breadcrumbs, HomeController];