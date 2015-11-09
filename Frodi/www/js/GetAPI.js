(function(){
  var GetAPI = function($http,$q){

    var getCar = function(number){

      return $http.get("http://apis.is/car?number="+number)
        .then(function(res) {
          var car = res.data.results;
          return car;
      });
    };

    var getCompany = function(name){

      return $http.get("js/data/companys.json")
        .then(function(res){
          var company = [];
          for(var i = 0; i<res.data.length;i++){
            for(key in res.data[i]){
              if(res.data[i][key] == name){
                company.push(res.data[i]);
              }
            }
          }
          return company
        });
    };

    var getCompany2 = function(name){

      var urlComps = '//tsuts.tskoli.is/2t/0204912809/selectClass2.php?firstname=';
      var urlJsonp = '&callback=JSON_CALLBACK';

      return $http.jsonp(urlComps+name+urlJsonp)
        .success(function(data){
          return data;
        });
    };


    return{
      getCar:getCar,
      getCompany:getCompany,
      getCompany2:getCompany2
    };

  };

  var module = angular.module("App");
  module.factory("GetAPI",GetAPI);

})();
