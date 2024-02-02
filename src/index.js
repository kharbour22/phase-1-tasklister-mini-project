document.addEventListener("DOMContentLoaded", () => {
  const createTaskForm = document.getElementById('create-task-form')
  const taskULElement = document.getElementbyId('tasks')
  createTaskForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const newTaskDescription = document.getElementById('new-task-description')
    console.log(newTaskDecriptionInpoutElement.value)
    const liElement = document.createElement('li')
    liElement.textcontent = newTankDescriptionInputElement.value

    const deleteButton = document.createElement('button')
    deleteButton.textcontent = 'X'

    deleteButton.addEventListener('click', () =>{
      deleteButton.parentNode.remove
    }
    )


    liElement.appendChild(deleteButton)
    tasksULElement.appendChild(liElement)
});


//const paragraph = document.getElementById('text');
    //paragraph.textContent = "This is really cool!"