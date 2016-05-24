class ProductsController {
    constructor($scope) {
        this.init($scope);
    }
    init($scope) {
        $scope.items = [
            { itemName: "Milk", itemCategory: "Dairy", itemPrice: 1.40, image: require("../../../image/Milk.png")  },
            { itemName: "Cheese", itemCategory: "Dairy", itemPrice: 2.40, image: require("../../../image/Cheese.jpg") },
            { itemName: "Water", itemCategory: "Drinks", itemPrice: 1.20, image: require("../../../image/Water.jpg") },
            { itemName: "Juice", itemCategory: "Drinks", itemPrice: 3.30, image: require("../../../image/Juice.jpg") },
            { itemName: "Potato", itemCategory: "Vegetable", itemPrice: 5.90, image: require("../../../image/Potato.jpg") },
            { itemName: "Tomato", itemCategory: "Vegetable", itemPrice: 6.88, image: require("../../../image/Tomato.jpg") }
        ];
    }
}

export default ['$scope', ProductsController];