let range = '128392-643281'

const findPasswords = (range) => {
  let [lowest, highest] = range.split('-').map(vals => parseInt(vals))
  let count = 0

  for(let pw = lowest; pw <= highest; pw++){
    let values = `${pw}`.split('').map((val) => parseInt(val))
  
    if(checkCriteria(values)){
      count++
    }
  }

  return count
}

const checkCriteria = (values) => {
  let twoAdjacent = false
  let increasing = true
  
  for(let i = 0; i < values.length; i++){
    let prevNotSame = values[i] != values[i-1]
    let nextNotSame = values[i+1] != values[i+2]

    if(values[i] === values[i+1] && prevNotSame && nextNotSame){
      twoAdjacent = true
    }

    if(values[i] > values[i+1]){
      increasing = false
    }
  }

  return twoAdjacent && increasing
}

console.log(findPasswords(range))