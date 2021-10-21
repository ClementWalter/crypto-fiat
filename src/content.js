// constants
const NUMBER_REGEX = /(\d+[\d\s,]*\.?[\de-]*)/;
const CURRENCY_REGEX =
  /[$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6]/;
const PRICE_REGEX = `(${CURRENCY_REGEX.source}${NUMBER_REGEX.source})|(${NUMBER_REGEX.source}${CURRENCY_REGEX.source})`;

// utils
const updateContent = (rate) => (textContent) =>
  Array.from(textContent.matchAll(PRICE_REGEX))
    .map((price) => [
      price[0],
      `${
        parseFloat(price[0].match(NUMBER_REGEX)[0].replace(/\s|,/g, "")) /
        rate.BTCUSDT
      } BTC`,
    ])
    .reduce(
      (previousValue, currentValue) =>
        previousValue.replace(currentValue[0], currentValue[1]),
      textContent
    );

const updateDOM = (rate) => {
  const allElements = document.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i += 1) {
    const element = allElements[i];
    // eslint-disable-next-line no-restricted-syntax
    for (const node of Array.from(element.childNodes)) {
      if (node.nodeType === node.TEXT_NODE) {
        const newContent = updateContent(rate)(node.textContent);
        if (node.textContent !== newContent) {
          console.log(`Update price from ${node.textContent} to ${newContent}`);
          node.textContent = newContent;
        }
      }
    }
  }
};

function updatePrice() {
  chrome.storage.sync.get("BTCUSDT", updateDOM);
}

window.onload = updatePrice;

for (let sec = 0; sec < 4; sec += 1) {
  window.setTimeout(updatePrice, 1000 * sec);
}

// chrome APIs
chrome.runtime.onMessage.addListener((request) => {
  if (request === "refreshPrices") {
    updatePrice();
  }
});
