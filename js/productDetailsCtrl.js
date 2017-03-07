angular.module('assessment').controller('productDetailsCtrl', function($scope, $stateParams, shopService) {
  console.log($stateParams)
  shopService.getProductDetails($stateParams.id).then(function(result) {

      console.log(result);
      $scope.productDetails = result.data;
  })
    })
