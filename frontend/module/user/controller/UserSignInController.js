import breadcrumbs from './../../../common/service/Breadcrumbs';

let UserSigninController = function($scope, Breadcrumbs, $http) {
    Breadcrumbs.clear()
        .add('Home', 'home')
        .add('Sign in');

    $scope.title = 'Sign in';

};

export default ['$scope', breadcrumbs, '$http', UserSigninController];