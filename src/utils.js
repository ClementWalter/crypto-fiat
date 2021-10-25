import consola from "consola";
import _ from "lodash";
import currencyToSymbolMap from "currency-symbol-map/map";
import { BINANCE_API_ROUTE, NUMBER_REGEX, SYMBOL_REGEX } from "./constants";

const parseNumber = (price) => {
  let number = price.match(NUMBER_REGEX);
  if (!number) return NaN;
  number = number[0].trim().toLowerCase();

  let factor = 1;
  if (number.includes("k")) {
    number = number.replace("k", "");
    factor = 1e3;
  }
  if (number.includes("m")) {
    number = number.replace("m", "");
    factor = 1e6;
  }
  if (number.includes("b")) {
    number = number.replace("b", "");
    factor = 1e9;
  }
  if (number.includes("bn")) {
    number = number.replace("bn", "");
    factor = 1e9;
  }
  const parts = number.replace(/[\s,]/g, ".").split(".");
  let decimals = 0;
  if (parts.length > 1 && parts[parts.length - 1].length !== 3) {
    decimals = parts.pop();
  }
  return parseFloat(`${parts.join("")}.${decimals}`) * factor;
};

const parseSymbol = (price) => {
  let symbol = price.match(SYMBOL_REGEX);
  if (!symbol) return undefined;
  symbol = symbol[0].trim();
  const currency = _.invert(currencyToSymbolMap)[symbol];
  return symbol === "$" ? "USDT" : currency;
};

const parsePrice = (rate) => (price) => {
  const symbol = parseSymbol(price);
  const number = parseNumber(price);
  const trailingSpaces = price.length - price.trimEnd().length;
  const startingSpaces = price.length - price.trimStart().length;

  consola.log(
    `Parsing price ${price} with symbol ${symbol} and number ${number}\nrate is`,
    rate
  );
  return [
    price,
    `${" ".repeat(startingSpaces)}${
      number / rate[`BTC${symbol}`]
    } BTC${" ".repeat(trailingSpaces)}`,
  ];
};

const fetchPrices = async () => {
  const response = await fetch(BINANCE_API_ROUTE);
  const prices = await response.json();
  return prices.reduce(
    // See: https://stackoverflow.com/a/44325124/4444546
    // eslint-disable-next-line no-return-assign,no-param-reassign,no-sequences
    (obj, item) => ((obj[item.symbol] = parseFloat(item.price)), obj),
    {}
  );
};

export { parseNumber, parseSymbol, parsePrice, fetchPrices };
