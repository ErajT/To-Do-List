function storeinput() {
  var input = document.getElementById("input").value;
  console.log(input);

  var listholder = document.querySelector(".listholder");
  var newDiv = document.createElement("div");
  newDiv.classList.add("newDiv");

  var checkbox = document.createElement("input");
  checkbox.classList.add("checkbox");
  checkbox.type = "checkbox";
  checkbox.name = "checkbox_input";
  checkbox.value = "ABC";

  var label = document.createElement("label");
  var textNode = document.createTextNode(input);
  label.appendChild(checkbox);

  var closeBtn = document.createElement("button");
  closeBtn.classList.add("closeBtn");
  closeBtn.textContent = "X";
  closeBtn.onclick = function () {
    newDiv.remove();
  };

  newDiv.appendChild(label);
  newDiv.appendChild(textNode);

  newDiv.appendChild(closeBtn);

  listholder.appendChild(newDiv);
}
