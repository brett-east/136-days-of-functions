// ROUTES

myFunctionsApp.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: '/pages/numbers/toExponential.html',
        controller: 'mainController'
    })
    
    .when('/toExponential', {
        templateUrl: '/pages/numbers/toExponential.html',
        controller: 'mainController'
    })
    
    .when('/days', {
        templateUrl: '/pages/home.html',
        controller: 'mainController'
    })
    
    //.otherwise({
	//    redirectTo: '/'
    //})
    ;
    
}]);