
class HomeController {
    constructor($scope) {
        this.init($scope);
    }
    init($scope) {
        $scope.title = 'Home page';
    }
}



export default ['$scope', HomeController];