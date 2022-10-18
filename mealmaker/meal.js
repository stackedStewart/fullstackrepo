 /*MEAL MAKER CODECADEMY PROJECT
 *JOHN STEWART
 *10/18/2022
 */

//CREATING THE MENU OBJECT
const menu = {
    _meal: "",
    _price: 0,
  
    //ADD SETTER METHODS(STEP 5)
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        return (this._meal = mealToCheck);
      }
    },
  
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        return (this._price = priceToCheck);
      }
    },
    //ADD GETTER METHOD(STEP 9)
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's Meal is ${this._meal} for ${this._price}!`;
      } else {
        return `Meal or price was not set correctly!`;
      }
    },
  };
  
  menu.meal = "Pizza";
  menu.price = 9;
  console.log(menu.todaysSpecial);
  