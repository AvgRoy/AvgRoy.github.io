function main(){
  $('body > *:not(#border-top)').hide();
  $('body > *:not(#border)').hide();
  $('.title').fadeIn(2500);
  $('.icon1').fadeIn(2500);
  $('.line').fadeIn(2500);
  $('.about').fadeIn(5000);
  $('.resume').fadeIn(5000);
}
$(document).ready(main);
