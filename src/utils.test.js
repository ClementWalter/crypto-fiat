import { fetchPrices, parseNumber, parsePrice, parseSymbol } from "./utils";

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
    ${"1 159 €"}  | ${1159}
    ${"1 159 k€"} | ${1159000}
    ${"1 159k€"}  | ${1159000}
    ${"$1 159k"}  | ${1159000}
    ${"$5k"}      | ${5000}
  `("should parse '$template' to '$number'", ({ template, number }) => {
    expect(parseNumber(template)).toEqual(number);
  });
});

describe("parseSymbol", () => {
  it("should convert $ to USD", () => {
    expect(parseSymbol("$5")).toEqual("USDT");
  });
});

describe("parsePrice", () => {
  it.each`
    template     | rate              | finalPrice
    ${"$5"}      | ${{ BTCUSDT: 2 }} | ${"2.5 BTC"}
    ${"$5k"}     | ${{ BTCUSDT: 2 }} | ${"2500 BTC"}
    ${"5$"}      | ${{ BTCUSDT: 2 }} | ${"2.5 BTC"}
    ${"€5  "}    | ${{ BTCEUR: 5 }}  | ${"1 BTC  "}
    ${" 5€ "}    | ${{ BTCEUR: 5 }}  | ${" 1 BTC "}
    ${" 17.17€"} | ${{ BTCEUR: 5 }}  | ${" 3.434 BTC"}
  `(
    "should convert '$template' with '$rate'' to '$finalPrice'",
    ({ template, rate, finalPrice }) => {
      expect(parsePrice(rate)(template)[1]).toEqual(finalPrice);
    }
  );
});

describe("fetchPrice", () => {
  it.each`
    symbol
    ${"BTCUSDT"}
    ${"BTCEUR"}
  `("should return a object symbol: value", async ({ symbol }) => {
    const rates = await fetchPrices();
    expect(rates).toHaveProperty(symbol);
    expect(typeof rates[symbol]).toBe("number");
  });
});
