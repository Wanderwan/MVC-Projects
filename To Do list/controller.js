import { Model } from "./model.js"
import { View } from "./view.js"

export class Controller {
  constructor(container) {
    this.model = new Model()
    this.model.load()
    this.view = new View(container)
    this.view.init()

    this.view.onAddTask(text => {
      this.model.addTasks(text)
      this.updateView()
    })

    this.view.onDeleteTask(id => {
      this.model.deliteTask(id)
      this.updateView()
    })

    this.view.onToggleComplete(id => {
      this.model.togleComplite(id)
      this.updateView()
    })

   
    this.updateView()
  }

  updateView() {
    const tasks = this.model.getTasks()
    this.view.render(tasks)

    const { total, completed } = this.model.getCounters()
    this.view.renderCounters(total, completed)
  }
}
