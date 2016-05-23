
class UserSigninController {
    constructor($scope) {
        this.init($scope);
    }
    init($scope) {
        $scope.title = 'Sign in';
    }
}

export default ['$scope', UserSigninController];