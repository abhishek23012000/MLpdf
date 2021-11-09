var image = new Image();
var i = 1;
image.src = `https://dd51.codetantra.com/bigbluebutton/presentation/db4297848e58b43064e17e6185e6035ae0547953-1636194427596/db4297848e58b43064e17e6185e6035ae0547953-1636194427596/833534a138e48268c75d63d77837854088c6abfd-1636194466914/svg/${i}`;


$("#video").html(image);

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      i = i - 1;
     image.src = `https://dd51.codetantra.com/bigbluebutton/presentation/db4297848e58b43064e17e6185e6035ae0547953-1636194427596/db4297848e58b43064e17e6185e6035ae0547953-1636194427596/833534a138e48268c75d63d77837854088c6abfd-1636194466914/svg/${i}`;
      $("#video").html(image);
      break;
    case 39:
      i = i + 1;
      image.src = `https://dd51.codetantra.com/bigbluebutton/presentation/db4297848e58b43064e17e6185e6035ae0547953-1636194427596/db4297848e58b43064e17e6185e6035ae0547953-1636194427596/833534a138e48268c75d63d77837854088c6abfd-1636194466914/svg/${i}`;
      $("#video").html(image);
      break;
  }
};

function othername() {
  i = document.getElementById("userInput").value;
 image.src = `https://dd51.codetantra.com/bigbluebutton/presentation/db4297848e58b43064e17e6185e6035ae0547953-1636194427596/db4297848e58b43064e17e6185e6035ae0547953-1636194427596/833534a138e48268c75d63d77837854088c6abfd-1636194466914/svg/${i}`;

  $("#video").html(image);
  
}
