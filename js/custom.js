// Enquiry Form 01
document.getElementById('saleForm01').addEventListener('submit', submitForm);

function submitForm(e) {

  e.preventDefault();

  $("#saleForm01 button").attr("disabled", "true");
  $("#saleForm01 input").attr("readonly", "true");
  $("#saleForm01 input").css("opacity", ".4");
  $("#saleForm01 textarea").css("opacity", ".4");

  $.ajax({

    url: "https://script.google.com/macros/s/AKfycbwSAf3_1gXwxm8h4KLAkVz50Ae2vrxKXpEiRY_8IrWdEVnsGjAHmjomOSnrFcwu9wKp/exec",
    data: $("#saleForm01").serialize(),
    method: "post",
    success: function(response) {

      console.log('Synchronization succeeded');

      $("#saleForm01 button").removeAttr("disabled");
      $("#saleForm01 input").removeAttr("readonly");
      $("#saleForm01 input").css("opacity", "1");
      $("#saleForm01 textarea").css("opacity", "1");
      $('#saleForm01')[0].reset();
      $("#form-results").css("display", "block");

      $("#form-results").text("Successfully Submitted.");
      setTimeout(function() {
        $("#form-results").text("");
      }, 3000);
    },
    error: function(err) {

      alert("Something Error");
    }
  })
}

function getInput(id) {

  return document.getElementById(id).value;
}
