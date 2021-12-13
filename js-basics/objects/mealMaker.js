const menu = {
    _courses: {
      appetizers:[],
      mains:[],
      desserts:[],
    },
    get appetizers (){
      return this._courses.appetizers
    },
    get mains (){
      return this._courses.mains
    },
    get desserts (){
      return this._courses.desserts
    },
  
    set appetizers (appetizers) {
      this._courses.appetizers = appetizers
    },
  
    set mains (mains){
      this._courses.mains = mains
    },
  
    set desserts (desserts){
      this._courses.desserts = desserts
  
    },
    
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    
  
      addDishToCourse (courseName, dishName, dishPrice){
        const dish = {
          name:  dishName, 
          price: dishPrice,
        };
        return this._courses[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random()*dishes.length);
    return dishes [randomIndex];
  
    },
  
    generateRandomMeal () {
      const appetizer = this.getRandomDishFromCourse('appetizers')
      const main = this.getRandomDishFromCourse('mains')
      const dessert = this.getRandomDishFromCourse('desserts')
      const totalPrice = appetizer.price + main.price + dessert.price
      return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the totsl price is ${totalPrice}.`
    }
    };
    
    
  menu.addDishToCourse('appetizers', 'popcorn', 6.73)
  menu.addDishToCourse('appetizers', 'nachos', 10.29)
  menu.addDishToCourse('appetizers', 'mozz sticks', 7.22)
  menu.addDishToCourse('mains', 'Beef', 70.22)
  menu.addDishToCourse('mains', 'Carne Asada', 17.21)
  menu.addDishToCourse('mains', 'Crispy Chicken', 12.52)
  menu.addDishToCourse('desserts', 'cookies', 5.22)
  menu.addDishToCourse('desserts', 'cream', 4.32)
  menu.addDishToCourse('desserts', 'cock', 100.00)
  
  const meal = menu.generateRandomMeal();
  console.log(meal)
  