const url = "https://personliste-ddf3.restdb.io/rest/drinks";

const options = {
  headers: {
    "x-apikey": "63ea0e24478852088da6817a",
  },
};

async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  vis(json);
}

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function vis(json) {
  console.log(json);
  json.forEach((drink) => {
    const klon = template.cloneNode(true);
    klon.querySelector(".Titel").textContent = drink.navn;
    klon.querySelector(".beskrivelse").textContent = drink.beskrivelse;

    klon.querySelector(".alkohol").textContent = drink.tag4;

    klon.querySelector(".billede").src = "billeder/" + drink.Billede;

    main.appendChild(klon);
  });
}

hentData();
