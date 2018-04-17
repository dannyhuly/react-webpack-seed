import Calc from './Calc';

let calc;

describe('Calc', () => {

    beforeEach(() => {
        calc = new Calc();
    });

  it('add', () => {

    const numA = 5,
        numB = 10;

    let calcAddRes = calc.add(numA, numB)

    expect(calcAddRes).toEqual(numA + numB);

  });

  it('renders withqwewqe wqe qwe qwe', () => {

    expect(false).toBeTruthy();
    
  });
  
});
