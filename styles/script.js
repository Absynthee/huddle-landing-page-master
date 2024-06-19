// email validation

function validateForm() {
  var x = document.getElementById("email").value;
  var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!regex.test(x)) {
    document.getElementById("invalidemail").innerHTML = "Invalid email address";
    return false;
  }
}
