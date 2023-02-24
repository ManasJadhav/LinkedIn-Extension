const connectButton = document.getElementById("connectButton");
const withdrawButton = document.getElementById("withdrawButton");
const acceptButton = document.getElementById("acceptButton");

connectButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    if (tab) {
      connectExecScript(tab);
    } else {
      alert("There are no active tabs");
    }
  });
});
withdrawButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    if (tab) {
      withdrawExecScript(tab);
    } else {
      alert("There are no active tabs");
    }
  });
});
acceptButton.addEventListener("click", () => {
  chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    if (tab) {
      acceptExecScript(tab);
    } else {
      alert("There are no active tabs");
    }
  });
});

function connectExecScript(tab) {
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id, allFrames: true },
      // func: grabConnectButtons,
      files: ["connect.js"],
    })
    .then(() => {
      console.log("script Injected");
    });
}

function withdrawExecScript(tab) {
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id, allFrames: true },
      // func: grabConnectButtons,
      files: ["withdraw.js"],
    })
    .then(() => {
      console.log("script Injected");
    });
}

function acceptExecScript(tab) {
  chrome.scripting
    .executeScript({
      target: { tabId: tab.id, allFrames: true },
      // func: grabConnectButtons,
      files: ["accept.js"],
    })
    .then(() => {
      console.log("script Injected");
    });
}
