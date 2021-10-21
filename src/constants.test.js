import { NUMBER_REGEX, PRICE_REGEX, CURRENCY_REGEX } from "./constants";

describe("Regex", () => {
  it.each`
    template                 | matchNumber   | matchPrice     | matchCurrency
    ${"From 4999 only"}      | ${"4999"}     | ${null}        | ${null}
    ${"From $4999 only"}     | ${"4999"}     | ${"$4999"}     | ${"$"}
    ${"From 4999$ only"}     | ${"4999"}     | ${"4999$"}     | ${"$"}
    ${"From 4,999 only"}     | ${"4,999"}    | ${null}        | ${null}
    ${"From $4,999 only"}    | ${"4,999"}    | ${"$4,999"}    | ${"$"}
    ${"From 4.999$ only"}    | ${"4.999"}    | ${"4.999$"}    | ${"$"}
    ${"From 4 999 only"}     | ${"4 999"}    | ${null}        | ${null}
    ${"From $4 999 only"}    | ${"4 999"}    | ${"$4 999"}    | ${"$"}
    ${"From 4 999$ only"}    | ${"4 999"}    | ${"4 999$"}    | ${"$"}
    ${"From 4999.50 only"}   | ${"4999.50"}  | ${null}        | ${null}
    ${"From $4999.50 only"}  | ${"4999.50"}  | ${"$4999.50"}  | ${"$"}
    ${"From 4999.50$ only"}  | ${"4999.50"}  | ${"4999.50$"}  | ${"$"}
    ${"From 4,999.50 only"}  | ${"4,999.50"} | ${null}        | ${null}
    ${"From $4,999.50 only"} | ${"4,999.50"} | ${"$4,999.50"} | ${"$"}
    ${"From 4.999.50$ only"} | ${"4.999.50"} | ${"4.999.50$"} | ${"$"}
    ${"From 4 999.50 only"}  | ${"4 999.50"} | ${null}        | ${null}
    ${"From $4 999.50 only"} | ${"4 999.50"} | ${"$4 999.50"} | ${"$"}
    ${"From 4 999.50$ only"} | ${"4 999.50"} | ${"4 999.50$"} | ${"$"}
    ${"From $ only"}         | ${null}       | ${null}        | ${"$"}
  `(
    "should match number, currency and price",
    ({ template, matchNumber, matchPrice, matchCurrency }) => {
      let number = template.match(NUMBER_REGEX);
      number = number ? number[0] : number;
      expect(number).toEqual(matchNumber);
      let price = template.match(PRICE_REGEX);
      price = price ? price[0] : price;
      expect(price).toEqual(matchPrice);
      let currency = template.match(CURRENCY_REGEX);
      currency = currency ? currency[0] : currency;
      expect(currency).toEqual(matchCurrency);
    }
  );
});
