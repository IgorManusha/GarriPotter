async function infoCharactersCard() {
  const response = await fetch("https://hp-api.onrender.com/api/characters");
  const data = await response.json();

  function addKey(key) {
    const createLi = document.createElement("li");
    createLi.innerHTML = `<p> ${key} : </p><span>  ${myData[key]}`;
    createLi.classList = "infoText";

    const infoCardModal = document.querySelector(".infoHermione");
    infoCardModal.append(createLi);
  }

  const myData = data[1];
  for (let key in myData) {
    if (key !== "id" && key !== "alternate_names") {
      addKey(key);
    }
  }
}
infoCharactersCard();
