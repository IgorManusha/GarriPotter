async function infoCharactersCard() {
  const response = await fetch("https://hp-api.onrender.com/api/characters");
  const data = await response.json();

  function addKey(key) {
    const createLi = document.createElement("li");
    createLi.innerHTML = `<p> ${key} : </p><span>  ${myData[key]}`;
    createLi.classList = "infoText";

    const infoCardModal = document.querySelector(".infoSeverus");
    infoCardModal.append(createLi);
  }

  const myData = data[7];
  for (let key in myData) {
    if (key !== "id" && key !== "Severus Snape") {
      addKey(key);
    }
  }
}
infoCharactersCard();
