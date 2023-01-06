const menu={
  _meal:'',
  _price:0,
  todaysSpecial (){
    if (this._meal && this._price){
      return `Today’s Special is ${this._meal} for $${this._price}!`
    }else{
      return `'Meal or price was not set correctly!`
    }
  },
  set meal(mealToCheck){
    if(typeof mealToCheck==='string'){
  this._meal=mealToCheck
  return this._meal
    }
}
}

menu._meal='potatoe';
menu._price=33;

console.log(menu._meal)
console.log(menu._price)
menu.meal='burekas'
console.log(menu._meal)
console.log(menu.todaysSpecial())
