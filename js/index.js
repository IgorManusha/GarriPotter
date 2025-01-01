const mainCardContainer = function () {
  const mainCardContainer = document.querySelector(".mainCardContainer");
  mainCardContainer.style.display = "block";
};

const mainList = function () {
  const list = document.querySelector("#mainList");
  list.style.opacity = 100;
  list.style.transition = "opacity 4s";
};

mainBut.onclick = function () {
  mainCardContainer();
  setTimeout(() => {
    mainList();
  }, 1);
};
