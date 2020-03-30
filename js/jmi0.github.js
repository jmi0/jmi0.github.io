
console.log('Hey Neighbor!');

$(document).ready(function() {

  $('#profile-container').hide();
  $('#profile-container').fadeIn(500);

  let grad = 0;
  setInterval(function() {
    //if (grad < 100) grad += 1;
    //else grad = 0;
    $('html').css({background: `re`});
  }, 100);


  // center align
  $('#profile-container').css({top: getTop(), left: getLeft()});

  $(window).resize(function() {
    // keep this center aligned
    $('#profile-container').css({top: getTop(), left: getLeft()});
  });

});


function getTop() {
  return ($(window).height() / 2) - ($('#profile-container').height() / 2);
}

function getLeft() {
  return ($(window).width() / 2) - ($('#profile-container').width() / 2);
}
