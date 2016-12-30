(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

  toBuyList.buyItem = function (itemIndex) {
    try {
      ShoppingListCheckOffService.buyItem(itemIndex);
    } catch (error) {
      toBuyList.errorMessage = error.message;
    }
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

var shoppingList = [
  {
    name: "Cakes",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "36"
  },
  {
    name: "Cookies",
    quantity: "30"
  },
  {
    name: "Chocolates",
    quantity: "50"
  },
  {
    name: "Pies",
    quantity: "5"
  }

];

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = shoppingList;
  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    var item = toBuyItems[itemIndex]

    boughtItems.push(item);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
