$("document").ready(function(){
 
  $(".loading  .spinner").slideUp(5000 , function(){
      $(".loading").hide(1000)
  });
});

let navigation = document.getElementById('navigation') ;
function navBarScroll()
{
  if(window.scrollY > 100)
  {
    navigation.style.background = '#1e1e33';
  }
  else
  {
    navigation.style.background = 'transparent';
  }
}
window.onscroll = navBarScroll ;
