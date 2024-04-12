//let $$ = e => document.createElement(e);
$(function() {
  let tap = $$("span");
  tap.classList.add('tap');
  $(".selection").prepend(tap);

  let selection_full = false;
  $('.tap').click(function(e) {
    selection_full = !selection_full;
    $('.selection').css({
      height: selection_full ? '100%' : '60%',
      position: selection_full ? 'absolute' : 'relative'
    });

  });

  let visible_answer = false;
  $('.flash_card').click(function() {
    visible_answer = !visible_answer;
    if (visible_answer) {
      $('.flash_card .question_card').css('display', 'none')
      $('.flash_card .answer_card').css('display', 'block');
    } else {
      $('.flash_card .question_card').css('display', 'block')
      $('.flash_card .answer_card').css('display', 'none');
    }
  })
});