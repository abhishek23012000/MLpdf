var image = new Image();
var i = 1;
image.src = `https://dd13.codetantra.com/bigbluebutton/presentation/9d179124b5d47830baa3c64b040f258acc56d7fd-1635326871996/9d179124b5d47830baa3c64b040f258acc56d7fd-1635326871996/c009ab1be2fe353805d568eba6099aeaf04efa4e-1635326969406/svg/${i}`;


$("#video").html(image);

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      i = i - 1;
     image.src = `https://dd13.codetantra.com/bigbluebutton/presentation/9d179124b5d47830baa3c64b040f258acc56d7fd-1635326871996/9d179124b5d47830baa3c64b040f258acc56d7fd-1635326871996/c009ab1be2fe353805d568eba6099aeaf04efa4e-1635326969406/svg/${i}`;
      $("#video").html(image);
      break;
    case 39:
      i = i + 1;
      image.src = `https://dd13.codetantra.com/bigbluebutton/presentation/9d179124b5d47830baa3c64b040f258acc56d7fd-1635326871996/9d179124b5d47830baa3c64b040f258acc56d7fd-1635326871996/c009ab1be2fe353805d568eba6099aeaf04efa4e-1635326969406/svg/${i}`;
      $("#video").html(image);
      break;
  }
};

function othername() {
  i = document.getElementById("userInput").value;
 image.src = `https://dd13.codetantra.com/bigbluebutton/presentation/9d179124b5d47830baa3c64b040f258acc56d7fd-1635326871996/9d179124b5d47830baa3c64b040f258acc56d7fd-1635326871996/c009ab1be2fe353805d568eba6099aeaf04efa4e-1635326969406/svg/${i}`;

  $("#video").html(image);
}
