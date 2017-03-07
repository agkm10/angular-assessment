angular.module('assessment').directive('productTmpl', function() {
        return {
            templateUrl: './views/product-tmpl.html',
            restrict: 'E',
            bindings: {
                productInfo: '='
            },
            controller: function() {
              this.test="WUTWUTUWUTUW"
              this.check = false;
              this.check2 = true;
              console.log("test", this.test)
              console.log("check", this.check)
              console.log("check2", this.check2)
              this.toggleHide = function() {
                console.log(this.check, this.check2)
                this.check = !this.check
                this.check2 = !this.check2
              }
              console.log(this.toggleHide)
            },
            controllerAs: '$ctrl'
          }
        })
