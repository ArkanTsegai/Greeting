let a = new Date()
 
let currentTime =a.getHours();

let message;

if(currentTime >= 4 && currentTime < 10) { 
    message = 'Good Morning';
  }
else if(currentTime >= 10 && currentTime < 12) {
    message = 'Good day';
  }
else if(currentTime >= 12 && currentTime < 18) {
    message = 'Good Afternoon';
  }
else if(currentTime >= 18 && currentTime < 22) {
    message = 'Good Evening';
  }
else if(currentTime >= 22 || currentTime < 4) {
    message = 'Good night';
  }
  
  

  document.getElementById("header").innerHTML = message + " " + 'sir' +'!';
