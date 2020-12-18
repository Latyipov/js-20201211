import { sortStrings } from './index';

describe('javascript-data-types/sort-strings', () => {
  it('should return sorted by "asc" array of strings', () => {
    expect(sortStrings(['b', 'c', 'a'])).toEqual(['a', 'b', 'c']);
  });

  it('should return sorted by "desc" array of strings', () => {
    const result = sortStrings(['b', 'c', 'a'], 'desc');

    expect(result).toEqual(['c', 'b', 'a']);
  });

  it('should correctly sort language-specific characters', () => {
    expect(sortStrings(['абрикос', 'яблоко', 'апельсин', 'ёжик'])).toEqual(['абрикос', 'апельсин', 'ёжик', 'яблоко']);
  });

  it('should correctly sort strings started from uppercase', () => {
    expect(sortStrings(['абрикос', 'Абрикос', 'яблоко', 'Яблоко', 'ёжик', 'Ёжик']))
      .toEqual(['Абрикос', 'абрикос', 'Ёжик', 'ёжик', 'Яблоко', 'яблоко']);
  });

  it('should correctly sort strings for mixed "en" and "ru" locales', () => {
    const data = [
      'Соска (пустышка) NUK 10729357',
      'ТВ тюнер D-COLOR  DC1301HD',
      'Детский велосипед Lexus Trike Racer Trike',
      'Соска (пустышка) Philips SCF182/12',
      'Powerbank аккумулятор Hiper SP20000'
    ];

    const expectedAsc = [
      'Детский велосипед Lexus Trike Racer Trike',
      'Соска (пустышка) NUK 10729357',
      'Соска (пустышка) Philips SCF182/12',
      'ТВ тюнер D-COLOR  DC1301HD',
      'Powerbank аккумулятор Hiper SP20000'
    ];

    const expectedDesc = [
      'Powerbank аккумулятор Hiper SP20000',
      'ТВ тюнер D-COLOR  DC1301HD',
      'Соска (пустышка) Philips SCF182/12',
      'Соска (пустышка) NUK 10729357',
      'Детский велосипед Lexus Trike Racer Trike'
    ];

    expect(sortStrings(data, 'asc')).toEqual(expectedAsc);
    expect(sortStrings(data, 'desc')).toEqual(expectedDesc);
  });
});