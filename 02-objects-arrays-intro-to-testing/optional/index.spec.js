import * as trueFunctions from "./index";

describe('objects-arrays-intro-to-testing/optional', () => {

  it('returnTrue0 with truthy parameters returns true', () => {
    expect(trueFunctions.returnTrue0(true)).toBeTruthy();
    expect(trueFunctions.returnTrue0({})).toBeTruthy();
    expect(trueFunctions.returnTrue0(' ')).toBeTruthy();
    expect(trueFunctions.returnTrue0(1)).toBeTruthy();
  });

  it('returnTrue1 with truthy parameters returns true', () => {
    expect(trueFunctions.returnTrue1('abcd')).toBeTruthy();
  });

  it('returnTrue2 with truthy parameters returns true', () => {
    expect(trueFunctions.returnTrue2(NaN)).toBeTruthy();
  });

  it('returnTrue3 with truthy parameters returns true', () => {
    expect(trueFunctions.returnTrue3([1], true, [1])).toBeTruthy();
  });

  it('returnTrue4 with truthy parameters returns true', () => {
    expect(trueFunctions.returnTrue4(9999999999999998)).toBeTruthy();
  });

  it('returnTrue5 with truthy parameters returns true', () => {
    let length = new String('length');
    expect(trueFunctions.returnTrue5(length)).toBeTruthy();
  });

  it('returnTrue6 with truthy parameters returns true', () => {
    const obj = {
      obj: 'obj',
      toString: () => 'obj',
    };
    expect(trueFunctions.returnTrue6(obj)).toBeTruthy();
  });

  it('returnTrue7 with truthy parameters returns true', () => {
    expect(trueFunctions.returnTrue7(-0, +0)).toBeTruthy();
  });
});
