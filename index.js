document.addEventListener("DOMContentLoaded", function() {
  const yesRadio = document.getElementById("yesRadio");
  const yesRadio2 = document.getElementById("yesRadio2");
  const myInput = document.getElementById('myInput');
  const myInput2 = document.getElementById('myInput2');
 

  myInput.required = true;
  myInput.required = true;
  myInput2.required = true;


  yesRadio.addEventListener("change", function() {
    if (this.checked) {
      myInput.required = true;
    }
  });

  document.getElementById("noRadio").addEventListener("change", function() {
    myInput.required = false;
  });


  // -------------------2nd input-------------
  yesRadio2.addEventListener("change", function() {
    if (this.checked) {
      myInput2.required = true;
    }
  });

  document.getElementById("noRadio2").addEventListener("change", function() {
    myInput2.required = false;
  });


});



  
 







