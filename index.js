var image = new Image();
var i = 1;
image.src = `https://dd17.codetantra.com/bigbluebutton/presentation/a5dad1558b319ad357dd8d3751f42d3506698058-1631183183174/a5dad1558b319ad357dd8d3751f42d3506698058-1631183183174/31d8e119078b9280e784de8b63f0e198c8b48dce-1631183248539/svg/${i}`;
$("#video").html(image);
document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      i = i - 1;
      image.src = `https://dd17.codetantra.com/bigbluebutton/presentation/a5dad1558b319ad357dd8d3751f42d3506698058-1631183183174/a5dad1558b319ad357dd8d3751f42d3506698058-1631183183174/31d8e119078b9280e784de8b63f0e198c8b48dce-1631183248539/svg/${i}`;
      $("#video").html(image);
      break;
    case 39:
      i = i + 1;
      image.src = `https://dd17.codetantra.com/bigbluebutton/presentation/a5dad1558b319ad357dd8d3751f42d3506698058-1631183183174/a5dad1558b319ad357dd8d3751f42d3506698058-1631183183174/31d8e119078b9280e784de8b63f0e198c8b48dce-1631183248539/svg/${i}`;
      $("#video").html(image);
      break;
  }
};

function othername() {
  i = document.getElementById("userInput").value;
  image.src = `https://dd17.codetantra.com/bigbluebutton/presentation/a5dad1558b319ad357dd8d3751f42d3506698058-1631183183174/a5dad1558b319ad357dd8d3751f42d3506698058-1631183183174/31d8e119078b9280e784de8b63f0e198c8b48dce-1631183248539/svg/${i}`;

  $("#video").html(image);
}
