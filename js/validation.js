let formValidation = document.getElementById("reg-form");

formValidation.addEventListener("submit", function (element) {
  element.preventDefault();

  let errors = {};
  let form = element.target;

  
  let usernameField = document.getElementById("firstname").value;
  

  if (usernameField.length < 5) {
    errors.username = "Username must be unique";
  }

  if (usernameField == "") {
    errors.username = "Username can not be empty";
  }

  
  let password1 = document.getElementById("password1").value;
  let password2 = document.getElementById("password2").value;

  if (password1 == "") {
    errors.mypassword = "Password field can not be empty";
  }
  if (password1 != password2) {
    errors.mypassword2 = "Passwords don't match";
  }

 
  let agree = document.getElementById("agree").checked;
  if (!agree) {
    
    errors.agree = "You must agree our terms and conditions";
  }

  
  let age = false;

  form.querySelectorAll('[name = "age"]').forEach((item) => {
    if (item.checked) {
      age = true;
    }
  });

  if (!age) {
    errors.age = "Please select your age";
  }

  console.log(errors);
});

