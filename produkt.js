const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get("_id");
console.log(_id);
const url = `https://personliste-ddf3.restdb.io/rest/drinks${_id}`;

const imagePath = `https://personliste-ddf3.restdb.io/rest/drinks${_id}`;

function hentData() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("#titel").textContent = drink.navn;
  document.querySelector("#beskrivelse").textContent = drink.beskrivelse;
  document.querySelector("#alkohol").textContent = drink.tag4;
  document.querySelector("#Billede").src = "billeder/" + drink.Billede;
  document.querySelector("img").src = imagePath;
}

hentData();
