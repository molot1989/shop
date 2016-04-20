import breadcrumbs from './../../../common/service/Breadcrumbs';

class UserSigninController {
    constructor($scope, Breadcrumbs) {
        this.init($scope, Breadcrumbs);
    }
    init($scope, Breadcrumbs) {
        Breadcrumbs.clear()
            .add('Home', 'home')
            .add('Sign in');
        $scope.title = 'Sign in';
    }
}

export default ['$scope', breadcrumbs, UserSigninController];