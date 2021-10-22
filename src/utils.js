import { BINANCE_API_ROUTE } from "./constants";

const parseNumber = (textContent) => {
  const parts = textContent.replace(/[\s,]/g, ".").split(".");
  if (parts.length === 1) {
    return parseFloat(parts[0]);
  }
  let decimals = parts.pop();
  if (decimals.length === 3) {
    parts.push(decimals);
    decimals = "0";
  }
  return parseFloat(`${parts.join("")}.${decimals}`);
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

export { parseNumber, fetchPrices };
