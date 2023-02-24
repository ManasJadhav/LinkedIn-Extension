function grabConnectButtons() {
  const searchText = "Connect";
  var btns = document.getElementsByTagName("span");
  var connectButtons = Array.from(btns).filter((btn) => {
    return btn.innerText === searchText;
  });
  // const len = connectButtons.length;
  sendInvite(connectButtons);
}

function sendInvite(invite) {
  if (invite.length != 0) {
    invite[0].parentElement.click();
    invite.shift();
    setTimeout(() => {
      clickSend(invite);
    }, 500);
  }
}

function clickSend(invite) {
  var buttons = document.querySelectorAll("button");
  var doneButton = Array.prototype.filter.call(buttons, function (el) {
    return el.textContent.trim() === "Send";
  });
  doneButton[0].click();
  setTimeout(() => clickClose(invite), 500);
}

function clickClose(invite) {
  setTimeout(() => {
    sendInvite(invite);
  }, 500);
}

grabConnectButtons();
