var image = new Image();
var i = 1;
image.src = `https://dd293.codetantra.com/bigbluebutton/presentation/9ce1d776d33c61803d75c27956d577a7c4cacae7-1632997584263/9ce1d776d33c61803d75c27956d577a7c4cacae7-1632997584263/8fea497587608f6e3eb833e032e8ee37716d25c6-1632997699344/svg/${i}`;
$("#video").html(image);

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      i = i - 1;
      image.src = `https://dd293.codetantra.com/bigbluebutton/presentation/9ce1d776d33c61803d75c27956d577a7c4cacae7-1632997584263/9ce1d776d33c61803d75c27956d577a7c4cacae7-1632997584263/8fea497587608f6e3eb833e032e8ee37716d25c6-1632997699344/svg/${i}`;
      $("#video").html(image);
      break;
    case 39:
      i = i + 1;
      image.src = `https://dd293.codetantra.com/bigbluebutton/presentation/9ce1d776d33c61803d75c27956d577a7c4cacae7-1632997584263/9ce1d776d33c61803d75c27956d577a7c4cacae7-1632997584263/8fea497587608f6e3eb833e032e8ee37716d25c6-1632997699344/svg/${i}`;
      $("#video").html(image);
      break;
  }
};

function othername() {
  i = document.getElementById("userInput").value;
  image.src = `https://dd293.codetantra.com/bigbluebutton/presentation/9ce1d776d33c61803d75c27956d577a7c4cacae7-1632997584263/9ce1d776d33c61803d75c27956d577a7c4cacae7-1632997584263/8fea497587608f6e3eb833e032e8ee37716d25c6-1632997699344/svg/${i}`;

  $("#video").html(image);
}
