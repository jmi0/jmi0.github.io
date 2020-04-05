/**
 * @Author: Joe Iannone <josephiannone>
 * @Date:   2020-03-29T21:24:06-04:00
 * @Filename: jmi0.github.js
 * @Last modified by:   josephiannone
 * @Last modified time: 2020-03-30T08:30:37-04:00
 */

console.log('Hey Neighbor!');

const BACKDROP_COLORS = ['red', 'blue', 'black', 'white', 'green', 'yellow'];
const BG_IMG_POS = ['center', 'left', 'top', 'right', 'bottom'];

$(document).ready(function() {

  $('#profile-container').hide();
  $('#profile-container').fadeIn(700);

  changeBackDrop();

  setInterval(function() {
    changeBackDrop();
  }, 10000);

  $('#profile-container, #tpicon-container').click(function() {
    changeBackDrop();
  });

  $(document).on('mouseover', '#profilepic', function() {
    changeBackDrop();
  });

});


function changeBackDrop() {

  $('#bgimage-container').css(
    'background-image',
    `url('${$('#bgimages img')[Math.floor(Math.random() * $('#bgimages img').length)].src}')`
  );

  $('#bgimage-backdrop-container').css(
    'background-color',
    BACKDROP_COLORS[Math.floor(Math.random() * BACKDROP_COLORS.length)]
  );

  $('#bgimage-container').css(
    'background-position',
    `${BG_IMG_POS[Math.floor(Math.random() * BG_IMG_POS.length)]} ${BG_IMG_POS[Math.floor(Math.random() * BG_IMG_POS.length)]}`
  );

}
