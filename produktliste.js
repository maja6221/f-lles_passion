//søg efter url parameter fra kategoriside
const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("cat");

const url = `https://personliste-ddf3.restdb.io/rest/drinks?tag4=${cat}`;

//ændre overskrift til kategori
document.querySelector("h1").textContent = cat;

//indsend API nøgle for at låse op for Restdb
const options = {
  headers: {
    "x-apikey": "63ea0e24478852088da6817a",
  },
};

//Hent data
async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  //Kald næste funktion
  visData(json);
}

const main = document.querySelector("main");

//fang template
const template = document.querySelector("template").content;

function visData(json) {
  console.log(json);

  //loope data for hvert produkt
  json.forEach((drink) => {
    //Sortering af produkter efter alkoholtype (tag4)
    if (cat == "Alle" || cat == drink.tag4) {
      //klon template
      const klon = template.cloneNode(true);

      //Skift data
      klon.querySelector(".Titel").textContent = drink.navn;
      klon.querySelector(".beskrivelse").textContent = drink.beskrivelse;
      klon.querySelector(".alkohol").textContent = drink.tag4;
      klon.querySelector(".billede").src = "billeder/" + drink.Billede;

      //konkatener produkt ID og URL parameter
      //Dette for at forbinde produktliste med det produktsiden når brugeren klikker.
      klon.querySelector(".link").href = "produkt.html?id=" + drink._id;

      // append child
      main.appendChild(klon);
    }
  });
}

//kald den første funktion
hentData();
