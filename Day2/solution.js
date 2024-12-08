const fs = require('fs')


path = './Day2/data.txt'

const readData = (file)=>fs.readFileSync(file,'utf-8').split('\n').map((el)=>el.split(' ').map(Number))


const checkArray = (array,count=0)=>{ // array === each report
    const isIncreasing = array[0]<array[1];
    const isDecreasing = array[0]>array[1];
    let diff = 0
    for(let i = 0;i<array.length-1;i++){
        diff = array[i+1] - array[i];
        if(1>Math.abs(diff) || Math.abs(diff)>3){ 
            return false
        }
        if(isIncreasing && diff<=0){ // if difference less than 0 than that means elment i+1 is less than i
            return false
        }
        if(isDecreasing && diff>=0){
            return false
        }
    }
    return true
}
let count = 0
let a  = readData(path).map((x)=>{
    if(checkArray(x)){
        count++;
        return ;
    }
    else{
        for(let i =0;i<x.length;i++){
            const array = x.slice(0,i).concat(x.slice(i+1))
            if(checkArray(array)){
                count++;
                return;
            }
        }
    }
})
console.log(count)
