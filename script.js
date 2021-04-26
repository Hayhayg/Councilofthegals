function displayMain() {
  let shown = document.getElementById("show").style.display;
  let button;
  let replace;
  if(shown === "block"){
    button = document.getElementById("buttonHide").innerHTML;
    replace = button.replace("Hide", "Reveal");
    document.getElementById("buttonHide").innerHTML = replace;
    document.getElementById("show").style.display = "none";
    

  }
  else{
    document.getElementById("show").style.display="block";
    button = document.getElementById("buttonHide").innerHTML;
    replace = button.replace("Reveal", "Hide");
    document.getElementById("buttonHide").innerHTML = replace;

  }
  
}