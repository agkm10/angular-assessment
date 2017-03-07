angular.module('assessment').service('shopService', function($http, $q) {
    this.getProductInfo = function() {
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products'
        })
    }
    this.getProductDetails = function(id) {
        return $http({
            method: 'GET',
            url: 'http://practiceapi.devmounta.in/products/'+id
        })
    }
})
