function loadHeader() {
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });
}

function loadFooter() {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", function () {
  loadHeader();
  loadFooter();
});

function showSnackbar(message) {
  const snackbar = document.getElementById("snackbar");
  snackbar.textContent = message;
  snackbar.className = "snackbar show";
  setTimeout(() => {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    let valid = true;
    let message = "";

    if (document.getElementById("name").value.trim() === "") {
      valid = false;
      message += "Name is required.\n";
    }

    if (document.getElementById("password").value.trim() === "") {
      valid = false;
      message += "Password is required.\n";
    }

    if (document.getElementById("email").value.trim() === "") {
      valid = false;
      message += "Email is required.\n";
    }

    if (document.getElementById("course").value === "") {
      valid = false;
      message += "Please select a course.\n";
    }

    const checkboxes = document.querySelectorAll('input[name="software"]');
    let softwareChecked = false;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        softwareChecked = true;
      }
    });
    if (!softwareChecked) {
      valid = false;
      message += "Please select at least one software knowledge.\n";
    }

    if (!valid) {
      event.preventDefault();
      showSnackbar(message.trim());
    }
  });

function pulldown_menu() {
  var url =
    document.pulldown.selectname.options[
      document.pulldown.selectname.selectedIndex
    ].value;
  window.location.href = url;
}

function checkbox_checker() {
  var checkbox_choices = 0;
  console.log(checkbox_form);
  
  for (counter = 0; counter < checkbox_form.checkbox.length(); counter++) {
    if (checkbox_form.checkbox[counter].checked) {
      checkbox_choices = checkbox_choices + 1;
    }
  }
  console.log(checkbox_checker);
  
  if (checkbox_choices >= 3) {
    msg = "Hurreeyy! you got discount .\n";
    alert(msg);
    return false;
  }else{
    msg = "select at least 3 options, to get the discount.\n";
    alert(msg);
    return false;
  }Please

}
