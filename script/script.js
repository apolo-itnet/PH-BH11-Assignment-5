// day and date update function 

const now = new Date();
const day = now.toLocaleString('en-US', { weekday: 'short'});
const date = now.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

document.getElementById('day').textContent=day ;
document.getElementById('date').textContent=date ;





const taskButtons = [
  document.getElementById('task-btn-1'),
  document.getElementById('task-btn-2'),
  document.getElementById('task-btn-3'),
  document.getElementById('task-btn-4'),
  document.getElementById('task-btn-5'),
  document.getElementById('task-btn-6'),
];
const taskHeadings = [
  document.getElementById('task-heading-1').textContent,
  document.getElementById('task-heading-2').textContent,
  document.getElementById('task-heading-3').textContent,
  document.getElementById('task-heading-4').textContent,
  document.getElementById('task-heading-5').textContent,
  document.getElementById('task-heading-6').textContent,
];
const navAddTask = document.getElementById('nav-add-task');
const assignComplete = document.getElementById('assign-complete');
const logContainer = document.getElementById('log-container');

let taskCount = 0;
const totalTask = taskButtons.length;

for (let i = 0; i < taskButtons.length; i++) {
  taskButtons[i].onclick = function(){
    taskCount++;

    alert('Board updated Successfully');
    if (taskCount === totalTask) {
      alert('congrats!!! You have completed all the current task')
    } 

    const navValue = parseInt(navAddTask.textContent) || 0;
    navAddTask.textContent = navValue + 1;

    const assignValue = parseInt(assignComplete.textContent) || 0;
    if (assignValue > 0){
      assignComplete.textContent = assignValue - 1;
    }

    const addLog = document.getElementById('log-container');

    const currentTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    const div = document.createElement('div');
    div.innerHTML = `
          <div> <p class="text-sm text-gray-600 p-2 m-2 mb-2 rounded-lg bg-blue-50"> You have Complete the Task <strong>  ${taskHeadings[i]} </strong> at ${currentTime} </p> </div> `;

    addLog.appendChild(div);

    taskButtons[i].disabled = true;

  }
}



document.getElementById('clear-btn').addEventListener('click', function(){
  logContainer.innerHTML = " ";
})

document.getElementById('discover-to-blog-page').addEventListener('click', function(){
  window.location.href = 'blog.html';
});


document.getElementById('theme-toggle-btn').addEventListener('click', function(){
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});


// task count update function
function updateTaskCount() {
  const taskCards = document.querySelectorAll('.task-card');
  assignComplete.textContent = taskCards.length;
}

updateTaskCount(); 