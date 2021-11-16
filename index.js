var image = new Image();
var i = 1;
image.src = `https://dd18.codetantra.com/bigbluebutton/presentation/deece5a566d81617db1008a6fe5016bf2cbb943f-1637058411598/deece5a566d81617db1008a6fe5016bf2cbb943f-1637058411598/043be36e6b6d2ce0c8f3dbfb01e7194878c54e26-1637058471300/svg/${i}`;


$("#video").html(image);

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      i = i - 1;
     image.src = `https://dd18.codetantra.com/bigbluebutton/presentation/deece5a566d81617db1008a6fe5016bf2cbb943f-1637058411598/deece5a566d81617db1008a6fe5016bf2cbb943f-1637058411598/043be36e6b6d2ce0c8f3dbfb01e7194878c54e26-1637058471300/svg/${i}`;
      $("#video").html(image);
      break;
    case 39:
      i = i + 1;
      image.src = `https://dd18.codetantra.com/bigbluebutton/presentation/deece5a566d81617db1008a6fe5016bf2cbb943f-1637058411598/deece5a566d81617db1008a6fe5016bf2cbb943f-1637058411598/043be36e6b6d2ce0c8f3dbfb01e7194878c54e26-1637058471300/svg/${i}`;
      $("#video").html(image);
      break;
  }
};

function othername() {
  i = document.getElementById("userInput").value;
 image.src = `https://dd18.codetantra.com/bigbluebutton/presentation/deece5a566d81617db1008a6fe5016bf2cbb943f-1637058411598/deece5a566d81617db1008a6fe5016bf2cbb943f-1637058411598/043be36e6b6d2ce0c8f3dbfb01e7194878c54e26-1637058471300/svg/${i}`;

  $("#video").html(image);
  
}
