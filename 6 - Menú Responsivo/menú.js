$(document).ready(main);
    //$('nav').toggle();

var contador = 1;

function main(){
    $('.Menú_bar').click(function(){
       if (contador == 1){
           $('nav').animate({
               left: '0'
           });
           contador = 0;
       }else {
           contador = 1;
           $('nav').animate({
               left: '-100%'
           });
       }
    });
};
