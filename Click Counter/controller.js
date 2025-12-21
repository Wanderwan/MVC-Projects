import { model } from "./model.js";
import { CounterView } from "./view.js";

export class CounterController {
  constructor(container){
    this.model = model.createCounterModel();
   // создаём экземпляр View
    this.view = new CounterView(container)

    // подписка на кнопки
    this.view.onIncrement(() => {
      this.model.increment()
      this.view.render(this.model.getValue())
    })


    this.view.onDecrement(() => {
      this.model.decrement()
      this.view.render(this.model.getValue())
    })

    this.view.onReset(() => {
      this.model.reset()
      this.view.render(this.model.getValue())
    })

    // в конце — один вызов render для инициализации
      this.view.render(this.model.getValue())
  }
}
 

