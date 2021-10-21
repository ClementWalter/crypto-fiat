import { PRICE_REGEX, NUMBER_REGEX } from "./constants";

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
