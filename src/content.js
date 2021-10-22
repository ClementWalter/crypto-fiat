import { PRICE_REGEX } from "./constants";
import { parsePrice } from "./utils";

// utils
const updateContent = (rate) => (textContent) =>
  Array.from(textContent.matchAll(PRICE_REGEX))
    .map((match) => match[0])
    .map(parsePrice(rate))
    .reduce(
      (previousValue, currentValue) =>
        previousValue.replace(currentValue[0], currentValue[1]),
      textContent
    );

// noinspection JSValidateTypes
const updateDOM = (rate) => {
  const allElements = document.getElementsByTagName("*");
  for (let i = 0; i < allElements.length; i += 1) {
    const element = allElements[i];
    // eslint-disable-next-line no-restricted-syntax
    for (const node of Array.from(element.childNodes)) {
      if (node.nodeType === node.TEXT_NODE) {
        const newContent = updateContent(rate)(node.textContent);
        if (node.textContent !== newContent) {
          // noinspection JSValidateTypes
          node.textContent = newContent;
        }
      }
    }
  }
};

function updatePrice() {
  for (let second = 0; second < 3; second += 1) {
    window.setTimeout(
      () => chrome.storage.sync.get(null, updateDOM),
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
