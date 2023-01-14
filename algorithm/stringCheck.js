// Write function below
function subLength(str,char){

  let position1;
  let position2;
  for (i=0;i<str.length;i++){
    if(str[i]===char){

if(position1===undefined){
  position1=i
  }
else if (position1 && position2===undefined){
  position2=i+1
}
    }
  }
   if (position1 && position2){
      return position2-position1
    }else{return 0}
}
subLength('Saturday', 'a')
subLength('cheesecake', 'k')
