//Group members : Jack Polson, Sharnetta Lamar, Erin Mehaffey, Sam Campbell

const parentElement = document.querySelector('.katas-list')
const MainHeading=document.createElement('h1')
parentElement.append('Katas Again?')

const kata1Heading = document.createElement('h2')
kata1Heading.append('KATA 1')
parentElement.append(kata1Heading)

//Kata Main Header



//Kata 1 Heading
const kata1heading=document.createElement('h2')
kata1heading.append('Kata 1')
//kata 1 sp
const kata1Sp=document.createElement('p')
parentElement.append(kata1Sp)

//mainElement.append(kata1Sp)
for (index = 0; index <=20; index ++) {
    if (index <=19) {
        kata1Sp.append(index +',')
    } else {
        kata1Sp.append(index)
    }
}

//Kata 2 Heading

const kata2Heading = document.createElement('h2')
kata2Heading.append('kata 2')
parentElement.append(kata2Heading)

const kata2Sp=document.createElement('p')
parentElement.append(kata2Sp)


for (let index1 = 2; index1 <= 20; index1 +=2) {
      if (index1 <= 20) {
        kata2Sp.append(index1 +',')
    } else {
        kata2Sp.append(index1)
    }

}


//Kata 3 Heading
const kata3Heading=document.createElement('h2')
kata3Heading.append('Kata 3')
parentElement.append(kata3Heading)

//kata 3 p 
const kata3Sp=document.createElement('p')
parentElement.append(kata3Sp)

for(let index2 = 1; index2 <= 19; index2 += 2) {
    if (index2 <= 19) {
        kata3Sp.append(index2 +',')
    } else {
        kata3Sp.append(index2)}
    }


//if((index2 % 2) == 0){
    

    
//kata 4 Heading

const kata4Heading=document.createElement('h2')
kata4Heading.append('Kata 4')
parentElement.append(kata4Heading)

//kata 4 p

const kata4Sp=document.createElement('p')
parentElement.append(kata4Sp)
for (let index3 = 5; index3 <= 100; index3 += 5) {
    if (index <= 100) {
        kata4Sp.append(index3 + ',')
    } else {
        kata4Sp.append(index3)
    }
}


//kata 5 heading
const kata5Heading=document.createElement('h2')
kata5Heading.append('Kata 5')
parentElement.append(kata5Heading)
// kata 5 p
const kata5Sp=document.createElement('p')
parentElement.append(kata5Sp)
for(let index4 = 1; index4 <= 100; index4 += 1){
  const index4IsPerfectSquare=Number.isInteger(Math.sqrt(index4))
  if(index4IsPerfectSquare){
      kata5Sp.append(index4 + ',') } else {
        kata5Sp.append(index4)
      }
    }
    

//Kata 6 Heading
const kata6Heading=document.createElement('h2')
kata6Heading.append('Kata 6')
parentElement.append(kata6Heading)
//kata 6 p
const kata6Sp=document.createElement('p')
parentElement.append(kata6Sp)
for (let index5 = 20; index5 >= 1; index5 -= 1) {
    if(index5 >= 1) {
        kata6Sp.append(index5 + ',')
    } else {
        kata6Sp.append(index5)
  }
}

//Kata 7 Heading
const kata7Heading=document.createElement('h2')
kata7Heading.append('Kata 7')
parentElement.append(kata7Heading)

//kata 7 p
const kata7Sp=document.createElement('p')
parentElement.append(kata7Sp)
for (let index6 = 20; index6 >= 2; index6 -= 2) {
    if (index6 >= 2) {
      kata7Sp.append(index6 +',')
  } else {
      kata7Sp.append(index6)
  }

}

//Kata 8 Heading
const kata8Heading=document.createElement('h2')
kata8Heading.append('Kata 8')
parentElement.append(kata8Heading)

//kata 8 p
const kata8Sp=document.createElement('p')
parentElement.append(kata8Sp)
for (let index7 = 19; index7 >= 1; index7 -= 2) {
    if (index7 >= 1) {
      kata8Sp.append(index7 +',')
  } else {
      kata8Sp.append(index7)
  }

}

//kata 9 Heading

const kata9Heading=document.createElement('h2')
kata9Heading.append('Kata 9')
parentElement.append(kata9Heading)

//kata 9 p

const kata9Sp=document.createElement('p')
parentElement.append(kata9Sp)
for (let index8 = 100; index8 >= 1; index8 -= 5) {
    if (index8 >= 1) {
        kata9Sp.append(index8 + ',')
    } else {
        kata9Sp.append(index8)
    }
}

//kata 10 heading
const kata10Heading=document.createElement('h2')
kata10Heading.append('Kata 10')
parentElement.append(kata10Heading)
// kata 10 p
const kata10Sp=document.createElement('p')
parentElement.append(kata10Sp)

for(let counter = 100; counter <= 1; counter +- 1){
  const counterIsPerfectSquare=Number.isInteger(Math.sqrt(counter))
  if(counterIsPerfectSquare){
      kata10Sp.append(counter + ',') } else {
        kata10Sp.append(counter)
      }
    }
    
//kata 11 heading
const kata11Heading=document.createElement('h2')
kata11Heading.append('Kata 11')
parentElement.append(kata11Heading)
// kata 11 p
const kata11Sp=document.createElement('p')
parentElement.append(kata11Sp)
const sampleArray = [469, 755, 244, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]

for (counter1 = 0; counter1 < sampleArray.length; counter1 ++)
    
{kata11Sp.append(sampleArray + ',')}


//Kata 12 Heading
const kata12Heading=document.createElement('h2')
kata12Heading.append('Kata 12')
parentElement.append(kata12Heading)
// kata 12 p
const kata12Sp=document.createElement('p')
parentElement.append(kata12Sp)
const Array = [469, 755, 244, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
for (let counter2 = 0; counter2 < Array.length; counter2 += 1) {
//let possibleNum = sampleArray[counter2]
//let evenArray = []
//let oddArray = []
if (counter2 % 2 === 0) {
    kata12Sp.append(Array[counter2] + ','); //else {Array.push[counter2]}
        }
    }

//kata12Sp.append(Array[counter2])

//Kata 13
const kata13Heading=document.createElement('h2')
kata13Heading.append('Kata 13')
parentElement.append(kata13Heading)
// kata 13 p
const kata13Sp=document.createElement('p')
parentElement.append(kata13Sp)
const Array2 = [469, 755, 244, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

let evenArray2 = []
let oddArray2 = []
for (let position = 0; position < sampleArray.length; position += 1) {
    let possibleNum = sampleArray[position]
    if(possibleNum % 2 == 0) {
        evenArray2.push(possibleNum)
    } else {
        oddArray2.push(possibleNum)
    }
}
kata13Sp.append(oddArray2)

//Kata 14
const kata14Heading=document.createElement('h2')
kata14Heading.append('Kata 14')
parentElement.append(kata14Heading)
// kata 14 p
const kata14Sp=document.createElement('p')
parentElement.append(kata14Sp)
const Array3 = [469, 755, 244, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
let squareArray = []
for(position1 = 0; position1 < Array3.length; position1 += 1) {
    let possibleNumber = Array3[position1]
    let squaredNumber = possibleNumber * possibleNumber
    squareArray.push(squaredNumber)
}
kata14Sp.append(squareArray.push(squaredNumber))