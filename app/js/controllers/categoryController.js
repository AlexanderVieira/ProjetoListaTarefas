taskApp.controller("categoryController", ["$rootScope", function ($rootScope) {
    
    $rootScope.categories = ['Casa', 'Trabalho', 'Faculdade'];

    $rootScope.addCategory = function(category){
        $rootScope.categories.push(angular.copy(category));
        delete $rootScope.category;
    }
    
}]);
