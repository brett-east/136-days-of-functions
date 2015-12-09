// ROUTES

myFunctionsApp.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: '/pages/home.html',
        controller: 'mainController'
    })
    
    .when('/toExponential', {
        templateUrl: '/pages/numbers/toExponential.html',
        controller: 'mainController'
    })
    
    //.otherwise({
	//    redirectTo: '/'
    //})
    ;
    
}]);