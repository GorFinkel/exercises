// Write function below
function  groceries(objArr){
let arr=[]
for (val of objArr){
  arr.push(val.item)
}
if (arr.length>1){
  return arr.slice(0,arr.length-1).join(', ')+' and '+ arr.slice(arr.length-1)
}else{return arr.join(' ')}
}

console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ))
