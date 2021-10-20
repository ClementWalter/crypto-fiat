function updatePrice() {
  chrome.storage.sync.get("BTCUSDT", (result) => {
    console.log("result", result);
  });
}

window.setInterval(updatePrice, 1000);
