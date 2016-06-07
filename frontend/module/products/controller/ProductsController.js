class ProductsController {
    constructor($scope) {
        this.init($scope);
    }
    init($scope) {
        $scope.items = [
            { itemName: "Платье", itemCategory: "dress", image: require("../../../image/dress.jpg"), url:"dress"  },
            { itemName: "Костюмы", itemCategory: "costume", image: require("../../../image/costume.jpg"), url:"costume" },
            { itemName: "Блузки", itemCategory: "blouse", image: require("../../../image/blouse.jpg"), url:"blouse" },
            { itemName: "Туники", itemCategory: "tunic", image: require("../../../image/tunic.jpg"), url:"tunic" },
            { itemName: "Юбки", itemCategory: "skirt", image: require("../../../image/skirt.jpg"), url:"skirt" },
            { itemName: "Брюки", itemCategory: "pants", image: require("../../../image/pants.jpg"), url:"pants" },
            { itemName: "Куртки", itemCategory: "jackets", image: require("../../../image/jackets.jpg"), url:'jackets' },
            { itemName: "Пальто", itemCategory: "coat", image: require("../../../image/coat.jpg"), url:"coat" },
            { itemName: "Шуба", itemCategory: "fur", image: require("../../../image/fur.jpg"), url:"fur" },
            { itemName: "Нижнее белье", itemCategory: "underwear", image: require("../../../image/underwear.jpg"), url:'underwear' },
            { itemName: "Купальники", itemCategory: "swimwear", image: require("../../../image/swimwear.jpg"), url:'swimwear' }

        ];
    }
}

export default ['$scope', ProductsController];