// $('.icon').on('click', function() {
//   $(this).slideToggle();
//   $(this).toggleClass('active');
//   console.log('yes');
// });
// console.log('yes');

$('.icon').on('click', function(){
  $('ul').slideToggle('slow');
  $(this).toggleClass('active');
});

var hamburger = $('.fa-bars').css('display');
// console.log('yes');
// if (hamburger == 'none') {
//   $('.nav').css('display', 'inline');
//   console.log('yes');
// }

if (!hamburger.localeCompare('none')) {
  $('.nav').css('display', 'inline');
  console.log('yes');
}

click.isDefaultPrevented();
