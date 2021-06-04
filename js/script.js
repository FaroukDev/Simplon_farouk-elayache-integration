// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/********Email Validation****/

/*email*/
let email = document.getElementById("email").validity.valid;

email.addEventListener("keyup", function (event) {
  if(email.validity.typeMismatch) {
    email.setCustomValidity("J'attend un e-mail, mon cher !");
  } else {
    email.setCustomValidity("Ok");
  }
});

/**** check if email is empty****/

// function required()
// {
// let empt = document.forms["form1"]["email"].value;
// if (empt == "")
// {
// alert("Please input a Value");
// return false;
// }
// else 
// {
// alert('Code has accepted : you can try another');
// return true; 
// }
// }