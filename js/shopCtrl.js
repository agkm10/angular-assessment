angular.module("assessment").controller('shopCtrl', function($scope, shopService) {
    $scope.test = 'hello'
    shopService.getProductInfo().then(function(result) {

        console.log(result);
        $scope.productInfo = result.data;
        
    })
})
