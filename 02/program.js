let program = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,5,19,23,2,10,23,27,1,27,5,31,2,9,31,35,1,35,5,39,2,6,39,43,1,43,5,47,2,47,10,51,2,51,6,55,1,5,55,59,2,10,59,63,1,63,6,67,2,67,6,71,1,71,5,75,1,13,75,79,1,6,79,83,2,83,13,87,1,87,6,91,1,10,91,95,1,95,9,99,2,99,13,103,1,103,6,107,2,107,6,111,1,111,2,115,1,115,13,0,99,2,0,14,0]

let output = 19690720

const findValues = (output, program) => {
  for(let noun = 0; noun < 100; noun++){
    for(let verb = 0; verb < 100; verb++){
      let programCopy = program.slice()
        if(runProgram(programCopy, noun, verb) == output){
          return 100 * noun + verb
        }
    }
  }
}

const runProgram = (program, noun, verb) => {
  let position = 0
  program[1] = noun
  program[2] = verb

  while(position < program.length){
    let opcode = program[position]

    if(opcode === 99){
      break
    }
    
    let a = program[position+1]
    let b = program[position+2]
    let storePosition = program[position+3]

    if(opcode == 1){
      program[storePosition] = program[a] + program[b]
    } else if(opcode == 2){
      program[storePosition] = program[a] * program[b]
    } else{
      return console.log("error: unknown opcode", opcode)
    }

    position += 4
  }
  
  return program[0]
}

console.log(findValues(output, program))
console.log(runProgram(program, 12, 2))
