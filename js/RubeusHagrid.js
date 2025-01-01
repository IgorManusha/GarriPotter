async function infoCharactersCard() {
  const response = await fetch("https://hp-api.onrender.com/api/characters");
  const data = await response.json();

  function addKey(key) {
    const createLi = document.createElement("li");
    createLi.innerHTML = `<p> ${key} : </p><span>  ${myData[key]}`;
    createLi.classList = "infoText";

    const infoCardModal = document.querySelector(".infoRubeus");
    infoCardModal.append(createLi);
  }

  const myData = data[8];
  for (let key in myData) {
    if (key !== "id" && key !== "Rubeus Hagrid") {
      addKey(key);
    }
  }

  //   for (let key in data) {
  //     const x = data[key].name;
  //     if (x === "Rubeus Hagrid") {
  //       return console.log(key);
  //     }
  //   }
}
infoCharactersCard();
