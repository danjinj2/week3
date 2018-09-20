
function Multiple(array) {
  let mappedArray = array.map(elem => elem * 3)
  return mappedArray
}
let array = [1,2,3,4,5]
console.log(Multiple(array))

function concatenation(strings) {
  let concatenate = strings.reduce((prev, elem) => prev + elem)
  return concatenate
}

let strings = ["My"," name"," is"," Bevy"]
console.log(concatenation(strings))
