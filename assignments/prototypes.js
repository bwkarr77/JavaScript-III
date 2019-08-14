/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
  */ 
  function GameObject(attrs){
    this.createdAt = attrs.createdAt;
    this.name = attrs.name;
    this.dimensions = attrs.dimensions;
  }

  GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game.`;
  }
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

//function CharacterStats = new GameObject;
function CharacterStats(attrs){
  GameObject.call(this, attrs);
  this.healthPoints = attrs.healthPoints;
}

CharacterStats.prototype=Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
    return `${this.name} took damage.`;
}
CharacterStats.prototype.checkIfDead = function(){
  if (this.healthPoints <= 0){
    return true;
  }else{return false;}
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

//function Humanoid = new CharacterStats.
function Humanoid(attrs){
  CharacterStats.call(this,attrs);
  this.team = attrs.team;
  this.weapons = attrs.weapons;
  this.language = attrs.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}`;
}
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  function Villain(attrs){
    Humanoid.call(this,attrs);
    this.damage = attrs.damage;
  }
  Villain.prototype = Object.create(Humanoid.prototype);
  Villain.prototype.attackHero = function(){
    return `${this.name} attacks with magic for ${this.damage}`;
  }

  function Hero(attrs){
    Humanoid.call(this,attrs);
    this.damage = attrs.damage;
  }
  Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.attackVillain = function(){
    return `${this.name} attacks with might for ${this.damage}`;
  }

  const badGuy = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2.5,
      width: 1.5,
      height: 5,
    },
    healthPoints: 60,
    name: 'Captain Thunder Sniper',
    team: 'The Upside Down',
    weapons: [
      'Insults',
      'Guilt',
    ],
    language: 'Meanie Speak',
    damage: 15,
  });

  const goodGuy = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 2,
      height: 6,
    },
    healthPoints: 50,
    name: 'Nifty Tiger',
    team: 'Jungle Book!',
    weapons: [
      'Claws',
      'Teeth',
      'Heroism'
    ],
    language: 'Tiger-People Something-or-Other',
    damage: 30,
  });



console.log(goodGuy.healthPoints);
console.log(badGuy.healthPoints);
while(goodGuy.healthPoints > 0 && badGuy.healthPoints > 0){
  var chance = Math.random()*10;
  if(chance>=4){
    console.log(goodGuy.attackVillain());
    badGuy.healthPoints = badGuy.healthPoints - goodGuy.damage;
  }else{
    console.log(badGuy.attackHero());
    goodGuy.healthPoints = goodGuy.healthPoints - badGuy.damage;
  }
  console.log(`${goodGuy.name}'s health: ${goodGuy.healthPoints}; ${badGuy.name}'s health : ${badGuy.healthPoints}.`);
}
if(goodGuy.healthPoints<0){
  console.log(goodGuy.destroy());
}else{
  console.log(badGuy.destroy());
}