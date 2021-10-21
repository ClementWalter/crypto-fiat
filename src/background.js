// constants
const BINANCE_API_ROUTE = "https://api.binance.com/api/v3/avgPrice";
const ALARM = {
  fetchAvgPrice: "fetchAvgPrice",
};

// utils
async function fetchAvgPrice(symbol = "BTCUSDT") {
  try {
    const response = await fetch(`${BINANCE_API_ROUTE}?symbol=${symbol}`);
    const avgPrice = await response.json();
    chrome.storage.sync.set({ [symbol]: avgPrice.price }, () => {
      console.log(`Value for ${symbol} is set to ${avgPrice.price}`);
    });
  } catch (e) {
    console.log(e);
  }
}

// chrome APIs
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === ALARM.fetchAvgPrice) {
    await fetchAvgPrice();
  }
});

chrome.runtime.onInstalled.addListener(async () => {
  await fetchAvgPrice();
  chrome.alarms.create(ALARM.fetchAvgPrice, { periodInMinutes: 1 });
});
