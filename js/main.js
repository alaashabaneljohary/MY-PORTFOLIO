$("document").ready(function(){
 
  $(".loading .spinner").slideUp(1000 , function(){
      $(".loading").hide(1000)
  });
});

let navigation = document.getElementById('navigation') ;
function navBarScroll()
{
  if(window.scrollY > 300)
  {
    navigation.style.background = '#1e1e33';
  }
  else
  {
    navigation.style.background = 'transparent';
  }
}
window.onscroll = navBarScroll ;

