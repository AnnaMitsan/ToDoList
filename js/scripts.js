

var button = document.getElementById('createTaskButton'); 
var createForm = document.getElementById('createTaskForm'); 
var content = document.getElementById('content'); 

button.addEventListener("click", function() {
  createForm.style.display = (createForm.dataset.toggled ^= 1) ? "inline-block" : "none";
  content.classList.toggle('shadow');
});

