export class View {
  constructor(container) {
    // куда будет рендериться todo-приложение
    this.container = container

    // эти элементы будут найдены в init
    this.form = null
    this.input = null
    this.list = null

    // колбэки для Controller
    this.onAdd = null
    this.onDelete = null
    this.onToggle = null
  }

  AddContent = () => {

  this.container.innerHTML =`
   <div class="todo-app">
        <header class="todo-header">
          <h1 class="title">Список задач</h1>
        </header>
        <form class="todo-form" id="todoForm">
          <div class="counter" id="counter">
            <p class="all-tasks">Всего: 0</p>
            <p class="complited-tasks">Выполнено: 0</p>
          </div>
          <input type="text" class="todo-input" id="todoInput" placeholder="Новая задача…" />
          <button id="addButton" type="button" class="btn-add-task">Добавить задачу</button>
        </form>
      </div>
      <div class="tasks-box">
      <h2 class="tasks-title"> Задачи </h2>
        <ul class="todo-list" id="todoList"> 
          <button class="delete-btn">✕</button>
        </li>
      </ul>
      </div>
  `
}

  init() {
    this.AddContent()

    this.form = this.container.querySelector('#todoForm')
    this.input = this.container.querySelector('#todoInput')
    this.list = this.container.querySelector('#todoList')
    this.counterAll = this.container.querySelector('.all-tasks')
    this.counterComplited = this.container.querySelector('.complited-tasks')
    
    this.form.addEventListener('submit', (e) => {
      e.preventDefault()
      if (!this.input.value.trim()) return
      if (this.onAdd) {
        this.onAdd(this.input.value)
      }
      this.input.value = ''
    })
  }

  render(tasks) {
    this.list.innerHTML = ''

    tasks.forEach(task => {
      const li = document.createElement('li')
      li.className = 'todo-item'
      if(task.completed){
        li.classList.add('completed')
      }
      li.dataset.id = task.id

      li.innerHTML = `
        <div class="todo-left">
          <input type="checkbox" ${task.completed ? 'checked' : ''}>
          <span>${task.text}</span>
        </div>
        <button class="delete-btn">✕</button>
      `
      li.querySelector('input').addEventListener('change', () => {
        if (this.onToggle) this.onToggle(task.id)
      })

      li.querySelector('.delete-btn').addEventListener('click', () => {
        if (this.onDelete) this.onDelete(task.id)
      })
      this.list.appendChild(li) 
    }) 
  }

  renderCounters(total, completed) {
    this.counterAll.textContent = `Всего: ${total}`
    this.counterComplited.textContent = `Выполнено: ${completed}`
  }

  onAddTask(handler) {
    this.onAdd = handler
  
  }

  onDeleteTask(handler) {
    this.onDelete = handler
  }

  onToggleComplete(handler) {
    this.onToggle = handler
  }

}
