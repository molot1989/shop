import breadcrumbs from './../../../common/service/Breadcrumbs';

class UserRegistrationController {
    constructor($scope, Breadcrumbs) {
        this.init($scope, Breadcrumbs);
    }
    init($scope, Breadcrumbs) {
        Breadcrumbs.clear()
            .add('Home', 'home')
            .add('Registration');

        $scope.title = 'Registration';
    }
}


export default ['$scope', breadcrumbs, UserRegistrationController];