function theBeatlesPlay(musicians, instruments) {
  var returnArray = [];
  for (var i = 0; i < musicians.length; i++) {
    returnArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return returnArray
}

function johnLennonFacts(factsArray){
  var i = 0
  while (i < factsArray.length) {
    factsArray[i] += "!!!"
    i++
  }
  return factsArray
}

function iLoveTheBeatles(number){
  var returnArray = []
  do {
    returnArray.push("I love the Beatles!")
    number++
  } while (number < 15)
  return returnArray
}
