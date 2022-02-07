import Character from '../Character';
import Bowman from '../Bowman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('Несуществующий тип персонажа', () => {
  expect(() => {
    const character = new Character('Garrosh', 'Warrior');
    return character;
  }).toThrow();
});

test('Bowman создаётся', () => {
  const result = new Bowman('Legolas');
  const expected = {
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(expected);
});

test('Daemon создаётся', () => {
  const result = new Daemon('Void');
  const expected = {
    name: 'Void',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(expected);
});

test('Magician создаётся', () => {
  const result = new Magician('Kadgar');
  const expected = {
    name: 'Kadgar',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(expected);
});

test('Swordsman создаётся', () => {
  const result = new Swordsman('Arthas');
  const expected = {
    name: 'Arthas',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(expected);
});

test('Undead создаётся', () => {
  const result = new Undead('Sylvana');
  const expected = {
    name: 'Sylvana',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(expected);
});

test('Zombie создаётся', () => {
  const result = new Zombie('Rawwwr');
  const expected = {
    name: 'Rawwwr',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(expected);
});

test('Имя меньше двух знаков', () => {
  expect(() => {
    const character = new Character('Z', 'Zombie');
    return character;
  }).toThrow();
});

test('Имя больше десяти знаков', () => {
  expect(() => {
    const character = new Character('Perepodvypodvert', 'Undead');
    return character;
  }).toThrow();
});

test('Невозможно повысить уровень мёртвого персонажа', () => {
  expect(() => {
    const character = new Bowman('Strelok');
    character.health = 0;
    return character.levelUp();
  }).toThrow();
});

test('Поднятие уровня персонажа', () => {
  const character = new Bowman('Legolas');
  character.levelUp();
  const expected = {
    name: 'Legolas',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(character).toEqual(expected);
});

test('Получение урона персонажем', () => {
  const character = new Bowman('Legolas');
  character.damage(1);
  const expected = {
    name: 'Legolas',
    type: 'Bowman',
    health: 99.25,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toEqual(expected);
});

test('Получение урона персонажем', () => {
  const character = new Bowman('Legolas');
  character.health = -1;
  character.damage(1);
  const expected = {
    name: 'Legolas',
    type: 'Bowman',
    health: -1,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(character).toEqual(expected);
});

test('Имя не является строкой', () => {
  expect(() => {
    const character = new Character(123, 'Undead');
    return character;
  }).toThrow();
});

test('Тип не является строкой', () => {
  expect(() => {
    const character = new Character('Ghoul', 123);
    return character;
  }).toThrow();
});
