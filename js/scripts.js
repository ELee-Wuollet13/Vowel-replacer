$(document).ready(function () {

  var vowels = ["a", "e", "i", "o", "u", "y"];

  $('#beginbutton').click(function (event) {
    var message = ($('input#original').val()).split('');
    for (index = 0; index < message.length; index++) {
      if (vowels.includes(message[index])) {
        message.splice(index, 1, "-")
        console.log(message);
      };
    };
    var output = message.join("")
    $(".result").text(output);
  }); //closes form
}); //closes doc read
