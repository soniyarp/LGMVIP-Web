

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByClassName("show");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Create a new student  when clicking on the "Submit" button
function NewStudent() {
  var row = document.createElement("li");

  var list1 = document.getElementById("Reg-id").value;
  var list2 = document.getElementById("name").value;
  var list3 = document.getElementById("M.No").value;
  var list4 = document.getElementById("email").value;
  var list5 = document.getElementByClassName("sex").value;
  var list6 = document.getElementById("add").value;
  var list7 = document.getElementById("course").value;
  
  var t1 = document.createTextNode(list1);
  li.appendChild(t1);
  var t2 = document.createTextNode(list2);
  li.appendChild(t2);
  var t3 = document.createTextNode(list3);
  li.appendChild(t3);
  var t4 = document.createTextNode(list4);
  li.appendChild(t4);
  var t5 = document.createTextNode(list5);
  li.appendChild(t5);
  var t6 = document.createTextNode(list6);
  li.appendChild(t6);
  var t7 = document.createTextNode(list7);
  li.appendChild(t7);

  if (!list1 || !list2 || !list3 || !list4 || !list5 || !list6 || !list7) {
    alert("Fill Valid Details of Student");
  }
  else {
    document.getElementById("row").append(ul);
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
}
