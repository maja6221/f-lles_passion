const urlParams = new URLSearchParams(window.location.search);
console.log("urlParams", urlParams);

const _id = urlParams.get("_id");
console.log("id", _id);
const url = `https://personliste-ddf3.restdb.io/rest/drinks${_id}`;

console.log("produkt.js");

const imagePath = `https://personliste-ddf3.restdb.io/rest/drinks${_id}.jpg`;

function hentData() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector(".titel").textContent = drink.navn;
  document.querySelector(".beskrivelse").textContent = drink.beskrivelse;
  document.querySelector(".alkohol").textContent = drink.tag4;
  document.querySelector(".Billede").src = "billeder/" + drink.Billede;
  document.querySelector("img").src = imagePath;
}

hentData();
