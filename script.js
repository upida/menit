$(document).ready(function() {
  $('#content').hide('fast');
  $('input[type="radio"]').click(function() {
    $('#content').hide('fast');
    if ($(this).prop('checked') == true) {
      var menu = $(this).attr('value');
      if (menu == '1') {
        $('#content').fadeIn(500);
        $('#content').load('1menit.html');
      } else if (menu == '10') {
        $('#content').fadeIn(500);
        $('#content').load('10menit.html');
      } else if (menu == '100') {
        $('#content').fadeIn(500);
        $('#content').load('100menit.html');
      }
    }
  });
  $('#content').fadeIn(1000);
  $('#content').load('1menit.html');
});
