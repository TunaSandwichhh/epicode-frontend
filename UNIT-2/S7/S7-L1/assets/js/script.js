class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(user) {
    return `${this.age > user.age ? this.firstName : user.firstName} is older`;
  }
}

const u1 = new User("a", "a", 12, "a");
const u2 = new User("b", "b", 16, "b");

console.log(u2.compareAge(u1));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(pet) {
    return this.ownerName === pet.ownerName;
  }
}
