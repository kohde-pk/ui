angular.module('app.core', ['ui.bootstrap']);

angular.module('app.core').controller('indexController', ['$scope', '$http', function($scope, $http) {

    var docBody = document.getElementById('#bod');
    console.log(docBody);
    
    var docColorItem = document.getElementsByClassName('.dropper--color.color1');
    console.log(docColorItem);

    jQuery(document).ready(function($){
        $('li.dropper--color.color1').on('click', function(){
          console.log('hey');
          

          
        });
        
        $('ul.card-stacks').on('click', function(){
          $(this).toggleClass('transition');
        });
        
        $('ul.cards-split').on('click', function(){
          $(this).toggleClass('transition');
        });
        
        $('ul.cards-split-delay').on('click', function(){
          $(this).toggleClass('transition');
        });
      });

}]);