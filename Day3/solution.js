const fs = require('fs')

REGEX = /(?<=mul\()\d{1,3},\d{1,3}(?=\))/gm

const readData = (data)=>fs.readFileSync(data,'utf-8').match(REGEX).map(el=>el.split(','))

const multiplyNums = (array)=>array[0]*array[1]



console.log(readData('./Day3/data.txt').map(el=>multiplyNums(el)).reduce((a,b)=>a+b))