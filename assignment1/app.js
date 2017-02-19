(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch = "";
  $scope.message = "";
  $scope.tooMuch = null;

  $scope.checkIfTooMuch = function () {
    var itemCount = getLunchItemCount($scope.lunch);

    if (itemCount === 0) {
      $scope.message = "Please enter data first";
      $scope.tooMuch = null;
    } else {
      $scope.tooMuch = isTooMuch(itemCount);

      if ($scope.tooMuch) {
        $scope.message = "Too Much!";
      } else {
        $scope.message = "Enjoy!";
      }
    }
  };

  function getLunchItemCount(string) {
    if (string === "") {
      return 0;
    } else {
      var array = string.split(",").filter(function(n){ return n.trim() != "" });

      return array.length;
    }
  }

  function isTooMuch(integer) {
    return integer > 3;
  }

}

})();
