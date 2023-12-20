function selectServer(id) {
  switch (id) {
    case 1:
      localStorage.setItem("area", "us");
      break;
    case 2:
      localStorage.setItem("area", "eu");
      break;

    case 3:
      localStorage.setItem("area", "asia");
      break;
  }
  window.location.href = "https://joeandthejuice.digital/app.html";
}

const joinButtons = document.querySelectorAll("[id^='join-button-']");

joinButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    selectServer(index + 1);
  });
});
