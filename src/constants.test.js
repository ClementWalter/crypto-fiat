import { NUMBER_REGEX, PRICE_REGEX, SYMBOL_REGEX } from "./constants";

describe("Regex", () => {
  it.each`
    template                  | matchNumber    | matchPrice      | matchCurrency
    ${"From 4999 only"}       | ${"4999"}      | ${null}         | ${null}
    ${"From $4999 only"}      | ${"4999"}      | ${"$4999"}      | ${"$"}
    ${"From 4999$ only"}      | ${"4999"}      | ${"4999$"}      | ${"$"}
    ${"From 4,999 only"}      | ${"4,999"}     | ${null}         | ${null}
    ${"From $4,999 only"}     | ${"4,999"}     | ${"$4,999"}     | ${"$"}
    ${"From 4.999$ only"}     | ${"4.999"}     | ${"4.999$"}     | ${"$"}
    ${"From 4 999 only"}      | ${"4 999"}     | ${null}         | ${null}
    ${"From $4 999 only"}     | ${"4 999"}     | ${"$4 999"}     | ${"$"}
    ${"From 4 999$ only"}     | ${"4 999"}     | ${"4 999$"}     | ${"$"}
    ${"From 4999.50 only"}    | ${"4999.50"}   | ${null}         | ${null}
    ${"From $4999.50 only"}   | ${"4999.50"}   | ${"$4999.50"}   | ${"$"}
    ${"From 4999.50$ only"}   | ${"4999.50"}   | ${"4999.50$"}   | ${"$"}
    ${"From 4,999.50 only"}   | ${"4,999.50"}  | ${null}         | ${null}
    ${"From $4,999.50 only"}  | ${"4,999.50"}  | ${"$4,999.50"}  | ${"$"}
    ${"From 4.999.50$ only"}  | ${"4.999.50"}  | ${"4.999.50$"}  | ${"$"}
    ${"From 4 999.50 only"}   | ${"4 999.50"}  | ${null}         | ${null}
    ${"From $4 999.50 only"}  | ${"4 999.50"}  | ${"$4 999.50"}  | ${"$"}
    ${"From 4 999.50$ only"}  | ${"4 999.50"}  | ${"4 999.50$"}  | ${"$"}
    ${"From $ only"}          | ${null}        | ${null}         | ${"$"}
    ${"From €4999 only"}      | ${"4999"}      | ${"€4999"}      | ${"€"}
    ${"From 4999€ only"}      | ${"4999"}      | ${"4999€"}      | ${"€"}
    ${"From 4.999 only"}      | ${"4.999"}     | ${null}         | ${null}
    ${"From €4.999 only"}     | ${"4.999"}     | ${"€4.999"}     | ${"€"}
    ${"From 4.999€ only"}     | ${"4.999"}     | ${"4.999€"}     | ${"€"}
    ${"From 4 999 only"}      | ${"4 999"}     | ${null}         | ${null}
    ${"From €4 999 only"}     | ${"4 999"}     | ${"€4 999"}     | ${"€"}
    ${"From 4 999€ only"}     | ${"4 999"}     | ${"4 999€"}     | ${"€"}
    ${"From 4999,50 only"}    | ${"4999,50"}   | ${null}         | ${null}
    ${"From €4999,50 only"}   | ${"4999,50"}   | ${"€4999,50"}   | ${"€"}
    ${"From 4999,50€ only"}   | ${"4999,50"}   | ${"4999,50€"}   | ${"€"}
    ${"From 4.999,50 only"}   | ${"4.999,50"}  | ${null}         | ${null}
    ${"From €4.999,50 only"}  | ${"4.999,50"}  | ${"€4.999,50"}  | ${"€"}
    ${"From 4.999,50€ only"}  | ${"4.999,50"}  | ${"4.999,50€"}  | ${"€"}
    ${"From 4 999,50 only"}   | ${"4 999,50"}  | ${null}         | ${null}
    ${"From €4 999,50 only"}  | ${"4 999,50"}  | ${"€4 999,50"}  | ${"€"}
    ${"From 4 999,50€ only"}  | ${"4 999,50"}  | ${"4 999,50€"}  | ${"€"}
    ${"From € only"}          | ${null}        | ${null}         | ${"€"}
    ${"From 4999,50k only"}   | ${"4999,50k"}  | ${null}         | ${null}
    ${"From €4999,50k only"}  | ${"4999,50k"}  | ${"€4999,50k"}  | ${"€"}
    ${"From 4999,50 k€ only"} | ${"4999,50 k"} | ${"4999,50 k€"} | ${"€"}
    ${"From $25B only"}       | ${"25B"}       | ${"$25B"}       | ${"$"}
    ${"29.10€"}               | ${"29.10"}     | ${"29.10€"}     | ${"€"}
  `(
    "should match number '$matchNumber', currency '$matchCurrency' and price '$matchPrice'",
    ({ template, matchNumber, matchPrice, matchCurrency }) => {
      let number = template.match(NUMBER_REGEX);
      number = number ? number[0].trim() : number;
      expect(number).toEqual(matchNumber);
      let price = template.match(PRICE_REGEX);
      price = price ? price[0].trim() : price;
      expect(price).toEqual(matchPrice);
      let currency = template.match(SYMBOL_REGEX);
      currency = currency ? currency[0].trim() : currency;
      expect(currency).toEqual(matchCurrency);
    }
  );
});
