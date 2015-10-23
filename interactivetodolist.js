makePage = function() {
  //alert("It worked!");
  //lcontents1 = document.createElement("li");
  //lcontents = document.createTextNode("This is a paragraph followed by a list");
  
  //lcontents1.appendChild(lcontents);
  //document.body.#.appendChild(lcontents1);
  
  
  
  myBox = document.querySelector("#textbox");
  myPriority = document.querySelector("#priority");
  
  myUl = document.querySelector("#tasklist");
  
  //alert("It worked2!");
  
  myLi = document.createElement("li");
  myLi.classList.add(myPriority.value);
  
  myUl.appendChild(myLi);
  
  //alert("It worked3!");
  
  myInput = document.createElement("INPUT");
  myInput.type = "checkbox";
  myLi.appendChild(myInput);
  myInput.onclick = boxchecked;
  
  myText = document.createTextNode(myBox.value);
  myLi.appendChild(myText);
  //document.querySelector("#textbox").setAttribute("value", "");

  localSave("tasklist");
}

boxchecked = function() {
  if(this.checked){
    this.parentNode.classList.add("done");
    localSave("tasklist");
  }
  else {
    this.parentNode.classList.remove("done");
    localSave("tasklist");
  }
}

//localSave("tasklist");
