async function infoCharactersCard() {
  const response = await fetch("https://hp-api.onrender.com/api/characters");
  const data = await response.json();

  function addKey(key) {
    const createLi = document.createElement("li");
    createLi.innerHTML = `<p> ${key} : </p><span>  ${myData[key]}`;
    createLi.classList = "infoText";

    const infoCardModal = document.querySelector(".infoChoChang");
    infoCardModal.append(createLi);
  }

  const myData = data[6];
  for (let key in myData) {
    //This function delete from List someSing elems
    if (key !== "id" && key !== "alternate_names") {
      addKey(key);
    } else {
      const data = myData[key];
      console.log(data);
    }
  }

  //   found for ouwer object , need elements , and hear index
  //   for (let key in data) {
  //     const y = data[key].name;
  //     console.log(y);
  //     if (y === "Cho Chang") {
  //       return console.log(y, "- index :", key);
  //     }
  //   }
}
infoCharactersCard();
