document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.querySelector('form')}
	form.addEventListener('submit', (e) => {
	  e.preventDefault()
	  add(e.target['new-task-description'].value)
	const form = document.querySelector("form");
	form.addEventListener("submit", (event) => {
	  event.preventDefault();
	  const input = form.querySelector("#new-task-description").value;
	  submitTodo(input)
	  form.reset()
	  })
  }));

  function add(input){
	let li = document.createElement('li')
	let btn = document.createElement('button')
	btn.textContent = 'x'
	btn.addEventListener('click', deleteList)
	li.textContent = `${input}  `
	document.querySelector('#list').appendChild(li)}
  const submitTodo = (todo) => {
	const ul = document.querySelector("#tasks")
	const li = document.createElement("li");
	const btn = document.createElement("button");
	btn.addEventListener("click", deleteList)
	btn.innerHTML = "<strong>DELETE</strong>";
	li.textContent =`${todo} `;
	li.appendChild(btn)
	ul.appendChild(li);

  }

  function deleteList(e){
	e.target.parentNode.remove()}
  const deleteList = (event) => {
	 event.target.parentNode.parentNode.remove();
  }

  // const newTaskForm = document.getElementById("create-task-form");
  // const newTaskDescription = document.getElementById("new-task-description");
  // // const newTaskPriority = document.getElementById("new-task-priority");
  // const taskUl = document.getElementById("tasks");
  // const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());
  // newTaskForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   taskList.createNewTask(newTaskDescription.value);
  //   e.target.reset();
  //   renderApp();
  // });
  // taskUl.addEventListener("click", (e) => {
  //   if (e.target.nodeName === "BUTTON") {
  //     taskList.deleteTask(e.target.dataset.description);
  //     renderApp();
  //   }
  // });

