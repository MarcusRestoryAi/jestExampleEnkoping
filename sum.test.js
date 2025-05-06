const sum = require("./sum")

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