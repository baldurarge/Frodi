var App = angular.module('App', ['ionic'])
  .run(function($ionicPlatform){
    $ionicPlatform.ready(function(){

    });
  })
  .config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider.
      state('home',{
      url:'/',
      templateUrl: 'views/homeView.html',
      controller:'homeController'
    });
    $stateProvider.
      state('carSearch',{
      url:'/carSearch',
      templateUrl:'views/carSearch.html',
      controller: 'carSearchController'
    });
    $stateProvider.
      state('companySearch',{
      url:'/companySearch',
      templateUrl:'views/companySearch.html',
      controller: 'companySearchController'
    });
    $stateProvider.
      state('currency',{
      url:'/currency',
      templateUrl:'views/currencyView.html',
      controller: 'currencyController'
    });
    $urlRouterProvider.otherwise('/');

  });
