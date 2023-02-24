function clickPending(invite) {
  if (invite.length != 0) {
    invite[0].parentElement.click();
    invite.shift();
    setTimeout(() => {
      clickWithdraw(invite);
    }, 500);
  }
}

function grabWithdrawButtons() {
  const searchText = "Pending";
  var btns = document.getElementsByTagName("span");
  var pendingButtons = Array.from(btns).filter((btn) => {
    return btn.innerText === searchText;
  });

  clickPending(pendingButtons);
}

function clickWithdraw(invite) {
  const searchText1 = "Withdraw";
  var withdrawBtns = document.getElementsByTagName("span");
  var withdrawButtons = Array.from(withdrawBtns).filter((btn) => {
    return btn.innerText === searchText1;
  });
  withdrawButtons[0].parentElement.click();
  setTimeout(() => clickClose(invite), 500);
}

function clickClose(invite) {
  setTimeout(() => {
    clickPending(invite);
  }, 500);
}

grabWithdrawButtons();
