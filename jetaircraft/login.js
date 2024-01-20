// function submit(){
//      let n= document.getElementById("name").value;
//      let p=document.getElementById("pass");
//      console.log(n , p);
//      return false;

//    //   if (n=="admin" && p=="pass"){
//    //      window.location.assign("contact.html");
//    //   }

// }


function submitForm() {
  // Get the form element
  var form = document.forms["myform"];

  // Get the values entered by the user
  var name = form.elements["name"].value;
  var pass = form.elements["pass"].value;
  console.log(name);

  // Check if the form is valid (you can add your own validation here)
  if (name == 'admin' && pass == "pass") {
    // Redirect to the new page
     form.action = "/main.html"; // Replace with your desired page URL
    
  }
  else{
    form.action="/page1.html"
  }
  // Prevent the default form submission behavior
  return false;
}

// login.js

// function submitForm() {
//   window.location.href = "https://www.google.com";
//   return false; // Prevents the form from submitting normally
// }
