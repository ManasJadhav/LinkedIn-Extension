function acceptRequest() {
  const searchText = "Accept";
  var btns = document.getElementsByTagName("span");
  var acceptButtons = Array.from(btns).filter((btn) => {
    return btn.innerText === searchText;
  });

  const len = acceptButtons.length;

  for (var i = 0; i < len; i++) {
    acceptButtons[i].parentElement.click();
  }
}

acceptRequest();
