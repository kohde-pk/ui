angular.module('app.core').controller('detailsController', ['$scope', '$http', function($scope, $http) {
    var vm = this;

    var root = document.documentElement;
    const lists = document.querySelectorAll('.h-container');

    lists.forEach(el => {
        const listItems = el.querySelectorAll('li');
        const n = el.children.length;
        el.style.setProperty('--total', n);
    });

}]);

