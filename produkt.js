const urlParams = new URLSearchParams(window.location.search);
console.log("urlParams", urlParams);

const _id = urlParams.get("id");
console.log("id", _id);
const url = `https://personliste-ddf3.restdb.io/rest/drinks/${_id}`;
console.log(url);
const imagePath = `https://personliste-ddf3.restdb.io/rest/drinks${_id}.jpg`;

//const url = "https://personliste-ddf3.restdb.io/rest/drinks";

const options = {
  headers: {
    "x-apikey": "63ea0e24478852088da6817a",
  },
};

function hentData() {
  fetch(url, options)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(drink) {
  console.log(drink);
  document.querySelector("#titel").textContent = drink.navn;
  document.querySelector("#beskrivelse").textContent = drink.beskrivelse;
  document.querySelector("#alkohol").textContent = drink.tag4;
  document.querySelector("#billede").src = "billeder/" + drink.Billede;
  document.querySelector("img").src = imagePath;
}

hentData();
