var image = new Image();
var i = 1;
image.src = `https://dd331.codetantra.com/bigbluebutton/presentation/02e925e9c144b3f19ebf4185c15867aa021d8158-1633429512653/02e925e9c144b3f19ebf4185c15867aa021d8158-1633429512653/8fea497587608f6e3eb833e032e8ee37716d25c6-1633429579623/svg/${i}`;
$("#video").html(image);

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      i = i - 1;
      image.src = `https://dd331.codetantra.com/bigbluebutton/presentation/02e925e9c144b3f19ebf4185c15867aa021d8158-1633429512653/02e925e9c144b3f19ebf4185c15867aa021d8158-1633429512653/8fea497587608f6e3eb833e032e8ee37716d25c6-1633429579623/svg/${i}`;
      $("#video").html(image);
      break;
    case 39:
      i = i + 1;
      image.src = `https://dd331.codetantra.com/bigbluebutton/presentation/02e925e9c144b3f19ebf4185c15867aa021d8158-1633429512653/02e925e9c144b3f19ebf4185c15867aa021d8158-1633429512653/8fea497587608f6e3eb833e032e8ee37716d25c6-1633429579623/svg/${i}`;
      $("#video").html(image);
      break;
  }
};

function othername() {
  i = document.getElementById("userInput").value;
  image.src = `https://dd331.codetantra.com/bigbluebutton/presentation/02e925e9c144b3f19ebf4185c15867aa021d8158-1633429512653/02e925e9c144b3f19ebf4185c15867aa021d8158-1633429512653/8fea497587608f6e3eb833e032e8ee37716d25c6-1633429579623/svg/${i}`;

  $("#video").html(image);
}
