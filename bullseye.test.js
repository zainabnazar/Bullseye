var makeSquare = require("./bullseye");

test("Throw error when passing a length less 0", () => {
    expect(makeSquare(-1)).toBe(false);
  });

  test("Throw error when passing a length bigger than 18", () => {
    expect(makeSquare(20)).toBe(false);
  });