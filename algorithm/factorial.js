// Write function below
function factorial(n){
 
  for (i=n-1; i>0; i--){
    n*=i
  }
  return n
}
console.log(factorial(10))
