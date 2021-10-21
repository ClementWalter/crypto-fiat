import { NUMBER_REGEX } from "./constants";

test("NUMBER_REGEX", () => {
  const number = "A price 2134.342 in a string".match(NUMBER_REGEX)[0];
  expect(number).toEqual("2134.342");
});
