(function(){
  var App = angular.module("App");

  App.controller('companySearchController',function($scope,GetAPI){

    $scope.groups = [];
    $scope.message = "Fyrirtækja Leit";
    $scope.showOrNot = false;



    $scope.search2 = function(searchText){
      GetAPI.getCompany2(searchText).then(onCompanyComplete);
    };

    var onCompanyComplete = function(data){
      console.log(data['data']);

      for(var x = 0; x<data['data'].length;x++){
        var tempArray = [];

        for(var i = 0; i<5; i++){

          tempArray.push(data['data'][x][i]);
        }
        $scope.groups.push(tempArray);
        console.log(tempArray);
      }


    };

    $scope.toggleGroup = function(group) {
      if ($scope.isGroupShown(group)) {
        $scope.shownGroup = null;
      } else {
        $scope.shownGroup = group;
      }
    };
    $scope.isGroupShown = function(group) {
      return $scope.shownGroup === group;
    };


  });


}());
