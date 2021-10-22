import consola from "consola";
import { ALARM } from "./constants";
import { fetchPrices } from "./utils";

// chrome APIs
async function fetchAvgPrice() {
  const prices = await fetchPrices();
  const { BTCUSDT: rate } = prices;
  chrome.storage.sync.set({ BTCUSDT: rate }, () => {
    consola.log("Rates updated");
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
