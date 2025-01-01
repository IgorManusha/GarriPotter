async function infoCharactersCard() {
  const response = await fetch("https://hp-api.onrender.com/api/characters");
  const data = await response.json();

  function addKey(key) {
    const createLi = document.createElement("li");
    createLi.innerHTML = `<p> ${key} : </p><span>  ${myData[key]}`;
    createLi.classList = "infoText";

    const infoCardModal = document.querySelector(".infoGinny");
    infoCardModal.append(createLi);
  }

  const myData = data[11];
  for (let key in myData) {
    if (key !== "id" && key !== "alternate_names") {
      addKey(key);
    }
  }

  //   for (let key in data) {
  //     const x = data[key].name;
  //     if (x === "Ginny Weasley") {
  //       return console.log(x, "- index : ", key);
  //     }
  //   }
}
infoCharactersCard();
