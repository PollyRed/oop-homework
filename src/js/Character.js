export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('Name is not a string');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name must be more than 2 and less than 10 symbols');
    }

    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof type !== 'string') {
      throw new Error('Type is not a string');
    }
    if (!types.includes(type)) {
      throw new Error('Type is incorrect');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('Character is dead');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
