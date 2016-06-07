class DressController {
    constructor($scope) {
        this.init($scope);
    }
    init($scope) {
        $scope.dress = [
            { name: "Платье", category: "dress",price:111, image: require("../../../image/dress.jpg"), url:"dress"  },
            { name: "Костюмы", category: "dress", price:111, image: require("../../../image/costume.jpg"), url:"costume" },
            { name: "Блузки", category: "dress", price:111, image: require("../../../image/blouse.jpg"), url:"blouse" },
            { name: "Туники", category: "dress", price:111, image: require("../../../image/tunic.jpg"), url:"tunic" },
            { name: "Юбки", category: "dress", price:111, image: require("../../../image/skirt.jpg"), url:"skirt" },
            { name: "Брюки", category: "dress", price:111, image: require("../../../image/pants.jpg"), url:"pants" },
            { name: "Куртки", category: "dress", price:111,  image: require("../../../image/jackets.jpg"), url:'jackets' },
            { name: "Пальто", category: "dress", price:111, image: require("../../../image/coat.jpg"), url:"coat" },
            { name: "Шуба", category: "dress", price:111, image: require("../../../image/fur.jpg"), url:"fur" },
            { name: "Нижнее белье", category: "dress", price:111, image: require("../../../image/underwear.jpg"), url:'underwear' },
            { name: "Купальники", category: "dress", price:111, image: require("../../../image/swimwear.jpg"), url:'swimwear' }
        ];
    }
}

export default ['$scope', DressController];