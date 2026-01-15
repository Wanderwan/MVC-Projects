export class Model {
  constructor() {
    this.tasks = []
    this.nextId = 1
  }

  addTasks(text) {
    const task = {
      id: this.nextId,
      text: text,
      completed: false
    }
    this.tasks.push(task) 
    this.nextId++
    this.save()
  }

  deliteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id)
    this.save()
  }

  togleComplite(id) {
    const task = this.tasks.find(task => task.id === id)
    if (task) {
      task.completed = !task.completed
    }
    this.save()
  }

  getTasks() {
    return this.tasks
  }

  getCounters(){
  const total = this.tasks.length
  const completed = this.tasks.filter(task => task.completed).length
  return { total, completed }
  }

  save(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks)) 
  }

  load(){
    const data = localStorage.getItem('tasks')
    if (data) {
      this.tasks = JSON.parse(data)
      this.nextId = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1
    }
  }
}


