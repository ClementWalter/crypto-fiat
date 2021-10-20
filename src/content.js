// constants
const HTML_SPACE_REGEX = /[\u00a0 ]/g;
const NUMBER_REGEX = /(\d+[\d\s]*[.,]?[\de-]*)/;
const CURRENCY_REGEX =
  /[$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]/;
const PRICE_REGEX = `(${CURRENCY_REGEX.source})?(${NUMBER_REGEX.source})(${CURRENCY_REGEX.source})?`;

// utils
const updateContent = (rate) => (textContent) => {
  const price = textContent.replace(HTML_SPACE_REGEX, "").match(PRICE_REGEX);
  if (!price) {
    return textContent;
  }
  const number = parseFloat(price[0].match(NUMBER_REGEX)[0]);
  return textContent
    .replace(NUMBER_REGEX, number / rate.BTCUSDT)
    .replace(CURRENCY_REGEX, "BTC");
};

const updateDOM = (rate) => {
  const allP = document.getElementsByTagName("p");
  for (let i = 0; i < allP.length; i += 1) {
    const p = allP[i];
    const textContent = p.lastElementChild && p.lastElementChild.textContent;
    if (textContent) {
      p.lastElementChild.textContent = updateContent(rate)(textContent);
    }
  }
};

function updatePrice() {
  chrome.storage.sync.get("BTCUSDT", updateDOM);
}

window.onload = updatePrice;
