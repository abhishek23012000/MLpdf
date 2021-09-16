var image = new Image();
var i = 1;
image.src = `https://dd19.codetantra.com/bigbluebutton/presentation/19ee9a94d37a2bf3dc5e8b6295e013ed014c9ec2-1631787976134/19ee9a94d37a2bf3dc5e8b6295e013ed014c9ec2-1631787976134/31d8e119078b9280e784de8b63f0e198c8b48dce-1631788091314/svg/${i}`;
$("#video").html(image);

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      i = i - 1;
      image.src = `https://dd19.codetantra.com/bigbluebutton/presentation/19ee9a94d37a2bf3dc5e8b6295e013ed014c9ec2-1631787976134/19ee9a94d37a2bf3dc5e8b6295e013ed014c9ec2-1631787976134/31d8e119078b9280e784de8b63f0e198c8b48dce-1631788091314/svg/${i}`;
      $("#video").html(image);
      break;
    case 39:
      i = i + 1;
      image.src = `https://dd19.codetantra.com/bigbluebutton/presentation/19ee9a94d37a2bf3dc5e8b6295e013ed014c9ec2-1631787976134/19ee9a94d37a2bf3dc5e8b6295e013ed014c9ec2-1631787976134/31d8e119078b9280e784de8b63f0e198c8b48dce-1631788091314/svg/${i}`;
      $("#video").html(image);
      break;
  }
};

function othername() {
  i = document.getElementById("userInput").value;
  image.src = `https://dd19.codetantra.com/bigbluebutton/presentation/19ee9a94d37a2bf3dc5e8b6295e013ed014c9ec2-1631787976134/19ee9a94d37a2bf3dc5e8b6295e013ed014c9ec2-1631787976134/31d8e119078b9280e784de8b63f0e198c8b48dce-1631788091314/svg/${i}`;

  $("#video").html(image);
}
