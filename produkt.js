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

// Data hentes fra restDB
function visProdukt(drink) {
  console.log(drink);
  document.querySelector("#titel").textContent = drink.navn;
  document.querySelector("#opskrift").textContent = drink.opskrift;
  //document.querySelector("#alkohol").textContent = drink.tag4;
  document.querySelector("#amount_1").textContent = drink.amount_1;
  document.querySelector("#ingrediens_1").textContent = drink.ingrediens_1;
  document.querySelector("#amount_2").textContent = drink.amount_2;
  document.querySelector("#ingrediens_2").textContent = drink.ingrediens_2;
  document.querySelector("#amount_3").textContent = drink.amount_3;
  document.querySelector("#ingrediens_3").textContent = drink.ingrediens_3;
  document.querySelector("#amount_4").textContent = drink.amount_4;
  document.querySelector("#ingrediens_4").textContent = drink.ingrediens_4;
  document.querySelector("#amount_5").textContent = drink.amount_5;
  document.querySelector("#ingrediens_5").textContent = drink.ingrediens_5;
  document.querySelector("#amount_6").textContent = drink.amount_6;
  document.querySelector("#ingrediens_6").textContent = drink.ingrediens_6;
  document.querySelector("#amount_7").textContent = drink.amount_7;
  document.querySelector("#ingrediens_7").textContent = drink.ingrediens_7;
  document.querySelector("#ingrediens_8").textContent = drink.ingrediens_8;

  // Billeder hentes fra restDB
  document.querySelector("#billede").src = "billeder/" + drink.Billede;
}

hentData();
