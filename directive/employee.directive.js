angular.module('app.core').directive('employeePage', function() {
    return {
        restrict: "A",
        templateUrl: '/templates/employees.html'
    };

});

angular.module('app.core').directive('resume', function() {
    return {
        restrict: "A",
        templateUrl: '/templates/resume.html'
    };

});