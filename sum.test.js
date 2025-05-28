const { sum, sub } = require("./sum")

//Deklarera test-grupp, med describe()
describe("Addera värden", () => {
  //Deklarera ett unit test med it()
  it("Addera 1+2 och förvänta 3", () => {
    expect(sum(1, 2)).toBe(3)
  })

  it("Addera 3+6 och förvänta 9", () => {
    expect(sum(3, 6)).toBe(9)
  })

  it("Addera 3+6 och förvänta 9", () => {
    expect(sum(1, 6)).toBe(7)
  })

  it("Addera -3+ -6 och förvänta 9", () => {
    expect(sum(-3, -6)).toBe(9)
  })

})

describe("Subtraction", () => {

  it("10-5 = 5", () => {
    expect(sub(10, 5)).toBe(5)
  })

  it("12 - 8 = 4", () => {
    expect(sub(12, 8)).toBe(4)
  })
})

describe('ChatGPTTester', () => {
  test('summerar två positiva tal', () => {
    expect(sum(3, 5)).toBe(8);
  });

  test('summerar två negativa tal (tar bort negativa)', () => {
    expect(sum(-3, -5)).toBe(8);
  });

  test('summerar ett positivt och ett negativt tal (negativa görs positiva)', () => {
    expect(sum(7, -2)).toBe(9);
  });

  test('hanterar noll i första parametern', () => {
    expect(sum(0, 4)).toBe(4);
  });

  test('hanterar noll i andra parametern', () => {
    expect(sum(6, 0)).toBe(6);
  });

  test('hanterar noll i båda parametrarna', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('hanterar stora positiva tal', () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
  });

  test('hanterar stora negativa tal', () => {
    expect(sum(-1000000, -2000000)).toBe(3000000);
  });

  test('hanterar decimaler', () => {
    expect(sum(1.5, 2.5)).toBeCloseTo(4.0);
  });

  test('hanterar negativa decimaler', () => {
    expect(sum(-1.5, -2.5)).toBeCloseTo(4.0);
  });

  test('returnerar alltid ett positivt värde', () => {
    expect(sum(-5, 2)).toBeGreaterThan(0);
    expect(sum(0, -8)).toBeGreaterThan(0);
  });

  test('returnerar rätt summa även vid blandade decimaler och heltal', () => {
    expect(sum(-3.2, 1)).toBeCloseTo(4.2);
  });

  test('hanterar mycket små tal', () => {
    expect(sum(0.000001, -0.000002)).toBeCloseTo(0.000003);
  });
});

// kommentar
