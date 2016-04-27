class UserRegistrationController {
    constructor($scope, $http) {
        this.init($scope, $http);
    }
    init($scope, $http) {
        $scope.title = 'Registration';
        $scope.addUser =  () => {
            console.log($scope.user);
            $http.post('/userRegister', $scope.user).success((response) => {
                console.log(response);
            });
        };
        $scope.user = {
            firstName: "",
            secondName: "",
            email: "",
            password: "",
            admin: false
        };
    }
}


export default ['$scope','$http', UserRegistrationController];