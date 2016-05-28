class ProductsController {
    constructor($scope) {
        this.init($scope);
    }
    init($scope) {
        $scope.items = [
            { itemName: "Платье", itemCategory: "dress", image: require("../../../image/dress.jpg"), url:"/dress"  },
            { itemName: "Костюмы", itemCategory: "costume", image: require("../../../image/costume.jpg"), url:"/costume" },
            { itemName: "Блузки", itemCategory: "Drinks", itemPrice: 1.20, image: require("../../../image/dress.jpg") },
            { itemName: "Туники", itemCategory: "Drinks", itemPrice: 3.30, image: require("../../../image/costume.jpg") },
            { itemName: "Юпки", itemCategory: "Vegetable", itemPrice: 5.90, image: require("../../../image/dress.jpg") },
            { itemName: "юпки", itemCategory: "Vegetable", itemPrice: 6.88, image: require("../../../image/costume.jpg") },
            { itemName: "Юпки", itemCategory: "Vegetable", itemPrice: 5.90, image: require("../../../image/dress.jpg") },
            { itemName: "юпки", itemCategory: "Vegetable", itemPrice: 6.88, image: require("../../../image/costume.jpg") },
            { itemName: "Юпки", itemCategory: "Vegetable", itemPrice: 5.90, image: require("../../../image/dress.jpg") },
            { itemName: "юпки", itemCategory: "Vegetable", itemPrice: 6.88, image: require("../../../image/costume.jpg") }
        ];
    }
}

export default ['$scope', ProductsController];