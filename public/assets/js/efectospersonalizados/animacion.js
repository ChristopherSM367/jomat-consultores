/* eslint-disable no-undef */
$(document).ready(function(){
 
  // hide our element on page load
  $('.ab').css('opacity', 0);
 
  $('.ab').waypoint(function() {
      $('.ab').addClass('fadeInUp');
  }, { offset: '80%' });




 $('.ef2').css('opacity', 1);
 
  $('.ef2').waypoint(function() {
      $('.ef2').addClass('slideInLeft');
  }, { offset: '150%' });


 $('.ef3').css('opacity', 2);
 
  $('.ef3').waypoint(function() {
      $('.ef3').addClass('fadeInDown');
  }, { offset: '100%' });


  $('.ef4').css('opacity', 3);
 
  $('.ef4').waypoint(function() {
      $('.ef4').addClass('slideInRight');
  }, { offset: '100%' });



     // eslint-disable-next-line no-unused-vars
     var options = {  /*este trozo iba en el header*/
    animateThreshold: 0,
    scrollPollInterval: 20
}
$('.aniview').AniView();
 
});