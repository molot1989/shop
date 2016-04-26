
class AboutController {
    constructor($scope) {
        this.init($scope);
    }
    init($scope) {
        $scope.title = 'About page';

    }
}

 export default ['$scope', AboutController];