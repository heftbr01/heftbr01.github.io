makePage = function() {
  paragraph = document.createElement("p");
  pcontents = document.createTextNode("This is a paragraph followed by a list");
  
  paragraph.appendChild(pcontents);
  document.body.appendChild(paragraph);
}
