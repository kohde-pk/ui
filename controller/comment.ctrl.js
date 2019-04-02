angular.module('app.core').controller('commentController', function() {
    var vm = this;

    vm.footerDetails = "Built using SASS, HTML, AngularJS"

    $.fn.commentCards = function(){

        return this.each(function(){
      
          var $this = $(this),
              $cards = $this.find('.card'),
              $current = $cards.filter('.card--current'),
              $next = $current.next();
      
          // $cards.on('click',function(){
          //   if ( !$current.is(this) ) {
          //     $cards.removeClass('card--current card--out card--next');
          //     $current.addClass('card--out');
          //     $current = $(this).addClass('card--current');
          //     $next = $current.next();
          //     $next = $next.length ? $next : $cards.first();
          //     $next.addClass('card--next');
          //   }
          // });
      
          if ( !$current.length ) {
            $current = $cards.last();
            $cards.first().trigger('click');
          }
      
          $this.addClass('cards--active');
      
        })
      
      };
      
      $('.cards').commentCards();

      jQuery(document).ready(function($){
        $('ul.cards').on('click', function(){
          $(this).toggleClass('transition');
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
});