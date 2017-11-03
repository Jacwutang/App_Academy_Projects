

let Cat = function(name, owner, store) {
  this.name = name;
  this.owner = owner;
  this.store = store;
};

Cat.prototype.cuteStatement = function() {
  console.log(`${this.owner} loves ${this.name}`);
};

let garfield = new Cat('Garfield', 'Jon', 'Jons home');
let catdog = new Cat('CatDog', 'Some dude', 'Prison');
let catinthehat = new Cat('Catinthehat', 'Dr. Seuss', 'Books');


Cat.prototype.cuteStatement = function() {
  console.log(`Everyone loves ${this.name}`);
};

garfield.cuteStatement();
catdog.cuteStatement();
catinthehat.cuteStatement();

Cat.prototype.meow = function() {
  console.log(`meow im a cat named ${this.name}`);
};

garfield.meow = function(){
  console.log("Custom");
};

garfield.meow();

catdog.meow();
catinthehat.meow();
