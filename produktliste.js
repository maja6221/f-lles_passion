const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");

const url = `https://personliste-ddf3.restdb.io/rest/drinks?tag4=${cat}`;

const options = {
  headers: {
    "x-apikey": "63ea0e24478852088da6817a",
  },
};

async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  visData(json);
}

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function visData(json) {
  console.log(json);
  json.forEach((drink) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".Titel").textContent = drink.navn;
    klon.querySelector(".beskrivelse").textContent = drink.beskrivelse;
    klon.querySelector(".alkohol").textContent = drink.tag4;
    klon.querySelector(".billede").src = "billeder/" + drink.Billede;

    klon.querySelector(".link").href = "produkt.html?id=" + drink._id;

    main.appendChild(klon);
  });
}

hentData();
