(function(){
  var GetAPI = function($http,$q){

    var getCar = function(number){

      return $http.get("http://apis.is/car?number="+number)
        .then(function(res) {
          var car = res.data.results;
          return car;
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

    var getCurrency = function(){

      return $http.get("http://apis.is/currency/arion")
        .then(function(res){
          return res.data.results;
        })

    };




    var getWeather = function(){

      return "hello";

    };


    return{
      getCar:getCar,
      getCompany2:getCompany2,
      getCurrency:getCurrency,
      getWeather:getWeather
    };

  };

  var module = angular.module("App");
  module.factory("GetAPI",GetAPI);

})();
