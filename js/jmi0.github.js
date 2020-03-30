/**
 * @Author: Joe Iannone <josephiannone>
 * @Date:   2020-03-29T21:24:06-04:00
 * @Filename: jmi0.github.js
 * @Last modified by:   josephiannone
 * @Last modified time: 2020-03-30T08:30:37-04:00
 */



console.log('Hey Neighbor!');

$(document).ready(function() {

  $('#profile-container').hide();
  $('#profile-container').fadeIn(700);

  /*
  // center align
  //$('#profile-container').css({top: getTop(), left: getLeft()});
  $(window).resize(function() {
    // keep this center aligned
    //$('#profile-container').css({top: getTop(), left: getLeft()});
  });
  */

});

/*
function getTop() {
  let top = ($(window).height() / 2) - ($('#profile-container').height() / 2);
  if (top < 0) top = 0;
  return top;
}

function getLeft() {
  let left = ($(window).width() / 2) - ($('#profile-container').width() / 2);
  if (left < 0) left = 0;
  return left;
}
*/
