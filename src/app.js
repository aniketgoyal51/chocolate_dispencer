var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color

const helpadd=function (chocolates,color,count){
  for(let i=0;i<count;i++){
    chocolates.unshift(color)
  }
}

function addChocolates(chocolates,color,count){
  return count<=0?'Number cannot be zero/negative': helpadd(chocolates,color,count)
}

//Progression 2: Remove z chocolates from the top the dispenser

const helpRemove=function(chocolates,count){
  var removechocolate=[]
  while (count>0){
    removechocolate.push(chocolates.shift())
    count-=1
  }
  return removechocolate
}

function removeChocolates(chocolates,count){
  const totalchocolate=chocolates.length
  return count<=0
  ?'Number cannot be zero/negative'
  :totalchocolate<count
  ?'Insufficient chocolates in the dispenser'
  :helpRemove(chocolates,count)  
}

//Progression 3: Dispense z chocolates

const helpdispense=function(chocolates,number){
  var dispensechocolate=[]
  while (number>0){
    dispensechocolate.push(chocolates.pop())
    number-= 1
  }
  return dispensechocolate;
}

function dispenseChocolates(chocolates,number){
  const totalchocolatedispense=chocolates.length
  return number<=0
  ?'Number cannot be zero/negative'
  :totalchocolatedispense<number
  ?'Insufficient chocolates in the dispenser'
  :helpdispense(chocolates,number)  
}

//Progression 4: Dispense z chocolates of x color

function dispenseChocolatesOfColor(chocolates,number, color){
  return dispenseChocolates(chocolates,number)
}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

const helpincount=function(chocolates){
  const countno=[]
  const reference=['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink']
  reference.forEach((reference)=>{
    let count=0;
    chocolates.forEach((chocolates)=>{
      if (chocolates==reference){
        count=count+1
      }
    })
    count>0?countno.push(count):null
  })
  return countno

}
function noOfChocolates(chocolates){
  return helpincount(chocolates);
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors

const helpsort=function(chocolates) {
  let countno=[]
  let store={}
  chocolates.sort();

  for   (let k=0;k<chocolates.length; k++){
    let count=0
    for(let l=0;l<chocolates.length;l++){
      if (chocolates[k]==chocolates[l]){
        count=count+1
      }
    }
    store[chocolates[k]]=count;
  }
  const sortable=Object.fromEntries(
    Object.entries(store).sort(([,a],[,b])=>b-a)
  )

  Object.keys(sortable).forEach((key)=>{
    for(let i=0;i<sortable[key];i++){
      countno.push(key)
    }
  })
  return countno;
}

function sortChocolateBasedOnCount(chocolates){
  finalcountno=helpsort(chocolates)
  return finalcountno
}

//Progression 7: Change z chocolates of x color to y color

const helpchangecolor= function(chocolates,number,color,finalColor){
  for(let i=0;i<chocolates.length;i++){
    if(chocolates[i]==color){
      chocolates[i]=finalColor;
    }
  }
  return chocolates;
}

function changeChocolateColor(chocolates,number,color,finalColor){
  return number<=0
  ?'Number cannot be zero/negative':
  color==finalColor
  ?"Can't replace the same chocolates"
  :helpchangecolor(chocolates,number,color,finalColor)
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates,color,finalColor){
  const changeColor=helpchangecolor(
    chocolates,
    chocolates.length,
    color,
    finalColor
  );
  counter=0
  changeColor.forEach((chocolate)=>{
    chocolate==finalColor?(counter+=1):(counter+=0)
  })
  return color==finalColor?"Can't replace the same chocolates":[counter, changeColor];
}

//Challenge 1: Remove one chocolate of x color from the top

function removeChocolateOfColor(chocolates,color){
  for(let i=0;i<chocolates.length;i++){
    if(chocolates[i]==color){
      position=index;
      break
    }
  }
  chocolates.splice(position,1)
  return chocolates;
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed

function dispenseRainbowChocolates(number){
  const store={}
  chocolates.forEach((chocolate)=>{
    if(chocolate in store){
      store[chocolate]+=1
    }
    else{
      store[chocolate]=1
    }
  })
  countOfEachChocolate=Object.value(store);
  totalNoOfrainbowChocolate=0;
  countOfEachChocolate.forEach((count)=>{
    if(count%3===0){
      totalNoOfrainbowChocolate +=count/3
    }
  });
  return totalNoOfrainbowChocolate
}