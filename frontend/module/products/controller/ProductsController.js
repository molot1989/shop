class ProductsController {
    constructor($scope,$http) {
        this.init($scope,$http);
    }
    init($scope,$http) {

        $http.get('/products').success(function(response){
            $scope.products = response;
            console.log(response)
        });
        // $scope.poroducts = [
        //     { name: "Платье", category: "dress", image: "../../../image/dress.jpg", url:"dress"  },
        //     { name: "Костюмы", category: "costume", image: "../../../image/costume.jpg", url:"costume" },
        //     { name: "Блузки", category: "blouse", image: "../../../image/blouse.jpg", url:"blouse" },
        //     { name: "Туники", category: "tunic", image: "../../../image/tunic.jpg", url:"tunic" },
        //     { name: "Юбки", category: "skirt", image: "../../../image/skirt.jpg", url:"skirt" },
        //     { name: "Брюки", category: "pants", image: "../../../image/pants.jpg", url:"pants" },
        //     { name: "Куртки", category: "jackets", image: "../../../image/jackets.jpg", url:'jackets' },
        //     { name: "Пальто", category: "coat", image: "../../../image/coat.jpg", url:"coat" },
        //     { name: "Шуба", category: "fur", image: "../../../image/fur.jpg", url:"fur" },
        //     { name: "Нижнее белье", category: "underwear", image: "../../../image/underwear.jpg", url:'underwear' },
        //     { name: "Купальники", category: "swimwear", image: "../../../image/swimwear.jpg", url:'swimwear' }
        //
        // ];
    }
}

export default ['$scope','$http', ProductsController];