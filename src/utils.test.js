import { parseNumber } from "./utils";

describe("parseNumber", () => {
  it.each`
    template      | number
    ${"4999"}     | ${4999}
    ${"4,999"}    | ${4999}
    ${"4.999"}    | ${4999}
    ${"4 999"}    | ${4999}
    ${"4999.50"}  | ${4999.5}
    ${"4999,50"}  | ${4999.5}
    ${"4,999.50"} | ${4999.5}
    ${"4.999,50"} | ${4999.5}
    ${"4 999.50"} | ${4999.5}
    ${"4 999,50"} | ${4999.5}
    ${"1 159 €"}  | ${4999.5}
  `("should parse '$template' to '$number'", ({ template, number }) => {
    expect(parseNumber(template)).toEqual(number);
  });
});
