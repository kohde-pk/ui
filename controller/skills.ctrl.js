angular.module('app.core').controller('skillsController', ['$scope', '$http', function($scope, $http) {
    var vm = this;

    $scope.footerDetails = "Build using SASS, HTML, AngularJS"

    $http.get('/uiexperiments/controller/json/skills.json').success(function (data) {
        $scope.skills = data;
    });
}]);