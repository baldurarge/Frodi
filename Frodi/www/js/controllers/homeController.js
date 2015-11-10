App.controller('homeController',['$scope', function($scope){
  $scope.buttons = [{'name':'Gjaldmiðla Reiknivél','icon':'<i class="icon ion-cash"></i>','href':"currency"},
                    {'name':'Bíla leit','icon':'<i class="icon ion-model-s"></i>','href':"carSearch"},
                    {'name':'Fyrirtækja Leit - Í vinnslu','icon':'<i class="icon ion-search"></i>','href':"companySearch"}];
}]);
