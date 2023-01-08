// Write your function here:
function howOld(age,year){
  
const currentYear = new Date().getFullYear();
if (year>currentYear) return `You will be ${age+year-currentYear} in the year ${year}`
if (year<currentYear){
  if (Math.abs((year-currentYear))<=age){
  return `You were ${age-(currentYear-year)} in the year ${year}`
  }else {
    return `The year ${year} was ${Math.abs(age-(currentYear-year))} years before you were born`
}
 
}
}
console.log(howOld(20,2003))

