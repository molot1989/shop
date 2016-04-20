import breadcrumbs from './../../../common/service/Breadcrumbs';

class AboutController {
    constructor($scope, Breadcrumbs) {
        this.init($scope, Breadcrumbs);
    }
    init($scope, Breadcrumbs) {
        Breadcrumbs.clear()
            .add('Home', 'home')
            .add('About');

        $scope.title = 'About page';

    }
}

 export default ['$scope', breadcrumbs, AboutController];