import { PRICE_REGEX, NUMBER_REGEX } from "./constants";
import { parseNumber } from "./utils";

// utils
const updateContent = (rate) => (textContent) =>
  Array.from(textContent.matchAll(PRICE_REGEX))
    .map((price) => [
      price[0],
      `${parseNumber(price[0].match(NUMBER_REGEX)[0]) / rate.BTCUSDT} BTC`,
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
          node.textContent = newContent;
        }
      }
    }
  }
};

function updatePrice() {
  for (let second = 0; second < 3; second += 1) {
    window.setTimeout(
      () => chrome.storage.sync.get("BTCUSDT", updateDOM),
      1000 * second
    );
  }
}

window.onload = updatePrice;

// chrome APIs
chrome.runtime.onMessage.addListener((request) => {
  if (request === "refreshPrices") {
    updatePrice();
  }
});
