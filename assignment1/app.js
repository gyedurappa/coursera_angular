(function () {
  'use strict';
  angular.module('lunchApp', [])
  .controller('lunchController', lunchController);

  lunchController.$inject = ['$scope'];
  function lunchController($scope) {
    $scope.lunch = "";
    $scope.lunchResult = "";

    $scope.checkLunch = function () {
      var lunchItems = $scope.lunch.split(',');
      console.log(lunchItems.length);
      if ($scope.lunch == ""){
        $scope.lunchResult = "Please enter data first";
      }else if(lunchItems.length > 3){
        $scope.lunchResult = "Too much!";
      }else{
          $scope.lunchResult = "Enjoy!";
      }
      console.log($scope.lunchResult);
    };

  }

})();
