function main(){
  $('body > *:not(#border-top)').hide();
  $('body > *:not(#border)').hide();
  $('.title').fadeIn(1250);
  $('.icon1').fadeIn(1250);
  $('.line').fadeIn(1250);
  $('.about').fadeIn(2500);
  $('.resume').fadeIn(2500);
}
$(document).ready(main);
