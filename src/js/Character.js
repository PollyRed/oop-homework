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
}
