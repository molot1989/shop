
class UserRegistrationController {
    constructor($scope, $http) {
        this.init($scope, $http);

    }
    init($scope, $http) {
        $scope.title = 'Registration';
        $scope.addUser = function() {
            console.log($scope.user);
            $http.post('/userRegister', $scope.user).success(function(response){
                console.log(response);
            });

        };
        $scope.user = {
            firstName: "",
            secondName: "",
            email: "",
            password: ""
        };
    }
}


export default ['$scope','$http', UserRegistrationController];