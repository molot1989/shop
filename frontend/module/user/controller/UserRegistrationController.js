import breadcrumbs from './../../../common/service/Breadcrumbs';

let UserRegistrationController = function($scope, Breadcrumbs, $http) {
    Breadcrumbs.clear()
        .add('Home', 'home')
        .add('Registration');

    $scope.title = 'Registration';

};

export default ['$scope', breadcrumbs, '$http', UserRegistrationController];