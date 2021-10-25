// REGEX
export const NUMBER_REGEX = /\d[\d\s,.]*[kbm]?(bn)?/i;
export const SYMBOL_REGEX =
  /[$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]/;
export const HTML_SPACE = /(\s|&nbsp;)?/;
export const PRICE_REGEX = new RegExp(
  `(${SYMBOL_REGEX.source}${HTML_SPACE.source}${NUMBER_REGEX.source})|(${NUMBER_REGEX.source}${HTML_SPACE.source}${SYMBOL_REGEX.source})`,
  "ig"
);

// Routes
export const BINANCE_API_ROUTE = "https://api.binance.com/api/v3/ticker/price";

// Alarms
export const ALARM = {
  fetchAvgPrice: "fetchAvgPrice",
};
