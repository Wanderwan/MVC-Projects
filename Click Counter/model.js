export const model = {
 createCounterModel() {
  let count = 0

  return {
    increment() {
      count++
    },
    decrement() {
      if(count == 0) return 
      count--
    },
    reset() {
      count = 0
    },
    getValue() {
      return count
    }
  }
}
}
