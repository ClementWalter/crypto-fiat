import consola from "consola";
import _ from "lodash";
import { ALARM } from "./constants";
import { fetchPrices } from "./utils";

// chrome APIs
async function fetchAvgPrice() {
  const prices = await fetchPrices();
  const rates = _.pick(prices, ["BTCUSDT", "BTCEUR"]);
  chrome.storage.sync.set(rates, () => {
    consola.log("Rates updated", rates);
  });
}

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === ALARM.fetchAvgPrice) {
    await fetchAvgPrice();
  }
});

chrome.runtime.onInstalled.addListener(async () => {
  await fetchAvgPrice();
  chrome.alarms.create(ALARM.fetchAvgPrice, { periodInMinutes: 1 });
});

chrome.tabs.onUpdated.addListener((tabId) => {
  chrome.tabs.sendMessage(tabId, "refreshPrices");
});
