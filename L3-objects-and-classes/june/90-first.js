function Animal(name) {
    this.name = name
}

Animal.prototype.walk = function () {
    console.log(`${this.name} walk`)
};


function Dog(name) {
    this.name = name;
    this.lives = 9
}

Dog.prototype = Object.create(Animal.prototype);
Dog.constructor = Dog;

Dog.prototype.meow = function () {
    console.log('汪汪')
};


const cat = new Dog('H');

cat.meow()