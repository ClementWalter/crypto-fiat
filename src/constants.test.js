import { NUMBER_REGEX } from "./constants";

describe("NUMBER_REGEX", () => {
  it.each`
    template                 | match
    ${"From 4999 only"}      | ${"4999"}
    ${"From $4999 only"}     | ${"4999"}
    ${"From 4999$ only"}     | ${"4999"}
    ${"From 4,999 only"}     | ${"4,999"}
    ${"From $4,999 only"}    | ${"4,999"}
    ${"From 4.999$ only"}    | ${"4.999"}
    ${"From 4 999 only"}     | ${"4 999"}
    ${"From $4 999 only"}    | ${"4 999"}
    ${"From 4 999$ only"}    | ${"4 999"}
    ${"From 4999.50 only"}   | ${"4999.50"}
    ${"From $4999.50 only"}  | ${"4999.50"}
    ${"From 4999.50$ only"}  | ${"4999.50"}
    ${"From 4,999.50 only"}  | ${"4,999.50"}
    ${"From $4,999.50 only"} | ${"4,999.50"}
    ${"From 4.999.50$ only"} | ${"4.999.50"}
    ${"From 4 999.50 only"}  | ${"4 999.50"}
    ${"From $4 999.50 only"} | ${"4 999.50"}
    ${"From 4 999.50$ only"} | ${"4 999.50"}
  `("should match a single number", ({ template, match }) => {
    expect(template.match(NUMBER_REGEX)[0]).toEqual(match);
  });
});
