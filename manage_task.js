
// define variables
const inputdesc = document.getElementById("input-desc");
const inputName = document.getElementById("input-name");
const listContainer = document.getElementById("list-container-task");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

/* Background right image*/
function randombg() {
  var random = Math.floor(Math.random() * 2) + 0;
  var bigSize = [
    "url('https://img.freepik.com/free-vector/flat-scrum-task-board-with-color-stick-paper-notes_88138-931.jpg?t=st=1727795624~exp=1727799224~hmac=b904b00dd10a82ef3c189c268784cc9bff3e1608efa5810ba8073b42e08914e3&w=996')", 
    "url('https://img.freepik.com/premium-photo/woman-checking-schedule-bulletin-board_1282444-7117.jpg?w=996')",
  ];
  document.getElementById("right").style.backgroundImage = bigSize[random];
}


   /* Create New task */  

function createTask() {
  const task = inputdesc.value.trim();
  const name= inputName.value.trim();
  var select = document.querySelector('#select_progress').value.trim();
  if(!name){
    alert("Please write the task name");
    return;
  }else if (!task ) {
    alert("Please write the task  description ");    
    return;
  } else if (!select){
    alert ("please select process task ")
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${name} : </span>
      <span>${task}</span>
    </label>
    <span class="update-task">Edit</span>
    <span class="remove-task">Delete</span>
    `;
  li.className = `${select}`;

  listContainer.appendChild(li);
  

  // Delete input field
  inputdesc.value = " ";

  // attach event listeners to the new task
  const checkbox = li.querySelector("input");
  const updatetask = li.querySelector(".update-task");
  const taskSpan = li.querySelector("span");
  const removetask = li.querySelector(".remove-task");


  // strike out the completed task
  checkbox.addEventListener("click", function () {
    li.classList.toggle("completed", checkbox.checked);
    updateCounters();
  });

   /* Update task */ 
  updatetask.addEventListener("click", function () {
    const update = prompt("Edit task:", taskSpan.textContent);
    if (update !== null) {
      taskSpan.textContent = update;
      li.classList.remove("completed");
      checkbox.checked = false;
      updateCounters();
    }
  });

   /* Remove task completely */
  removetask.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this task?")) {
      li.remove();
      updateCounters();
    }
  });
  updateCounters();
}


/*When the checkbook  is checked, the task is completed.*/

function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompletedTasks;
}
// add task when pressing Enter key
inputdesc.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

/* search name task */ 
function search() {
    // Declare variables
    var input, filter, ul, li,span, i, txtValue;
    input = document.getElementById('input-name');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list-container-task");
    li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
      span = li[i].getElementsByTagName("span")[0];
      txtValue = span.textContent || span.innerText;
      console.log(txtValue)
      console.log(txtValue.toUpperCase().indexOf(filter))
      if (txtValue.toUpperCase().indexOf(filter) >-1) {
        li[i].style.display = "block";
      } else {
        li[i].style.display = "none";
      }
    }
  }
/* Select status progress */
jQuery(document).ready(
   function(){
      var selectedo= jQuery("#select_progress  option:selected");
        jQuery('#select_progress').on('click',function(){
            var selectedO= jQuery("#select_progress  option:selected");
            var selectVal = jQuery("#select_progress  option:selected").val();
            if( selectVal !=''){
            selectedO.toggleClass('selected')
            }
       });            
           
       
  }
);

      
