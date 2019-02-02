/*document.addEventListener('DOMContentLoaded',function(){
	var arr = [1,2,3,4,2,1,5,6,2,1,2,3,7,6,3,2,1,2,3,6], len = arr.length;
var arr = [7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1], len = arr.length;
var frame_1 = [arr[0],arr[0],arr[0]], frame_2 = [9,arr[1],arr[1]], frame_3 = [9,9,arr[2]];
var rallyArr = [frame_1,frame_2,frame_3], arrFalse = ["F","F","F"];
var arrIndex = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9];

for(let i = 3; i < len; i++){
  if(arr[i] === frame_1[i-1] || arr[i] === frame_2[i-1] || arr[i] === frame_3[i-1] ){
    arrFalse.push(" ");
    for(let j = 0; j < rallyArr.length; j++){
      rallyArr[j].push(rallyArr[j][i-1]);
    }
  }
  else{
    arrFalse.push("F");
    let arrCount = [];
    let firstElem = [frame_1[i-1],frame_2[i-1],frame_3[i-1]];
    for(let j = 0; j < firstElem.length; j++){
      let count = 0;
      rallyArr[j].reduceRight((a,b) => {
        
        if(b == a){
          ++count;
          return a;
        }
      },firstElem[j]);
      arrCount.push(count);
    }
    let far = Math.max.apply(null,arrCount);
    for(let j = 0; j < firstElem.length; j++){
      if(arrCount[j] == far){
        rallyArr[j].push(arr[i]);   
      }
      else{
        rallyArr[j].push(rallyArr[j][i-1]);
      }
    }
  }
}

  console.log(arrIndex);
  console.log(arr);
  console.log()
  console.log(frame_1);
  console.log(frame_2);
  console.log(frame_3);
  console.log(arrFalse);
  https://repl.it/@khoailang991/WhiteQuickwittedDesignmethod-14
},false)*/


var arr = [1,2,3,4,2,1,5,6,2,1,2,3,7,6,3,2,1,2,3,6], len = arr.length;
var sumFrame = 3; 
var arrFalse = [];
var rallyFrame = [];

for(let i = 0; i < sumFrame; i++){
  arrFalse.push("F");
  rallyFrame.push([]);
  for(let j = 0; j < i; j++){
    rallyFrame[i].push(0);
  }
  for(let j = 0; j < sumFrame - i; j++){
    rallyFrame[i].push(arr[i]);
  }
}

for(let i = 0; i < sumFrame; i++){
  console.log(rallyFrame[i]);
}

for(let i = sumFrame; i < len; i++){
  let t = 0;
  for(let j = 0; j < sumFrame; j++){
    if(rallyFrame[j][i-1] == arr[i]){
      ++t;
      arrFalse.push(" ")
      for(let k = 0; k < sumFrame; k++){
        rallyFrame[k].push(rallyFrame[k][i-1]);
      }
      break;
    }
  }

  if(t == 0){
    arrFalse.push("F");
    let arrCount = [];
    for(let j = 0; j < sumFrame; j++){
      let count = 0;
      rallyFrame[j].reduceRight((a,b) => {
        if(b == a){
          ++count;
          return a;
        }
      },rallyFrame[j][i-1]);
      arrCount.push(count);
    }
    let far = Math.max.apply(null,arrCount);
    for(let j = 0; j < sumFrame; j++){
      if(arrCount[j] == far){
        rallyFrame[j].push(arr[i]);   
      }
      else{
        rallyFrame[j].push(rallyFrame[j][i-1]);
      }
    }
  }
  else{
    continue;
  }
}
console.log(arr);
console.log();
for(let j = 0; j < sumFrame; j++){
  console.log(rallyFrame[j])
}
console.log(arrFalse)