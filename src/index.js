document.addEventListener("DOMContentLoaded", () => {
  console.log('DOM is loaded');
})


const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  let taskList = document.getElementById('new-task-description')
  renderTodo(taskList.value)
  form.reset()
})

const renderTodo = taskList => {
  const li = document.createElement('li')
  const btn = document.createElement('button')
  const task = document.getElementById('tasks')
  li.textContent = `${taskList}`
  btn.textContent = 'X'
  btn.addEventListener('click', () => {
    li.remove()
  })
  task.appendChild(li)
  li.appendChild(btn)
}
