'use strict'
//get initial Value when input contains String
const getterMin = (array) => {
    let i = 0
    while(true){
        if(typeof array[i] === 'number'){
            break
        }
        i++
    }
    return array[i]
}
const findMaxMin = (array) => {
  let max = 0
  let min = getterMin(array)
  array.map((key,index) => {
      //check data if number
      if(typeof key === 'number'){
        max = max >= key ? max : key
        min = min >= key ? key : min
      }
  })
  console.log({
      'Input ' : array,
      'soal 1 Max' : max,
      'soal 1 Min' : min
  })
}

const multipleNumber = (value) => {
    //constraint 0-100
    if(value >= 0 && value <= 100){
       console.log(`Soal 2 Input : ${value}`)
       for(let i = 1 ; i <= value ; i++ ){
            if(i % 25 === 0)
                console.log('KI')
            if(i % 40 === 0)
                console.log('OS')
            if(i % 60 === 0)
                console.log('TIX')
            if(i === 99)
                console.log('KIOSTIX')
       }
    }
}


const isPalindrom = (value) => {
    if(typeof value === 'string'){
        const toArray = value.toLowerCase().split('')
        let i = toArray.length , string = ''
        while(i >= 0){
            if(toArray[i - 1] !== undefined){
                string = string + toArray[i - 1]
            }
            i--
        }
        
        console.log({
            'soal 3' : '',
            input : value,
            reverse : string,
            conclusion : string === value.toLowerCase() ? true : false
        })
    }
}
findMaxMin(['sdsds',132,31,1,'sasda',34,5,5])
multipleNumber(96)
isPalindrom('mALaM')