import boxes from "./boxes.js";

let trucks = {
  name: "Renault",
  wheels: 8,
};

// Avant le départ
console.log(trucks);

// vérification des pneus
const atelier = (/** reception */ camion) => {
  for (let i = 0; i < camion.wheels; i++) {
    /** Vérifier la pression */
    console.log("camion roue n°", i);
  }
  camion.pressure = "done";
  return camion;
};

const refill = (camion) => {
  camion.fill = "Full";
  return camion;
};

console.log("atelier pneu");
trucks = atelier(trucks);
console.log(trucks);

// Faire le plein
console.log("faire le plein");
trucks = refill(trucks);
console.log(trucks);

// Aller à l'entrepot
const load = (camion) => {
  trucks.load = boxes;
  return trucks;
};

console.log("chargement");
trucks = load(trucks);
console.log(trucks);

// Aller à l'usine de montage
console.log("montage");
const furniture = (camion) => {
  for (let i = 0; i < camion.load.length; i++) {
    if (camion.load[i].type === "chaise") {
      console.log("Montage de chaise");
      camion.load[i].status = "chair mounted";
    } else if (camion.load[i].type === "tabouret") {
      console.log("Montage de tabouret");
      camion.load[i].status = "tab mounted";
    } else {
      console.log("montage de table");
      camion.load[i].status = "table mounted";
    }
  }

  return camion;
};
trucks = furniture(trucks);
console.log(trucks);

// Aller à l'usine de peinture

// Aller à l'usine de décoration

// Aller au magasin

const maFunction = (param) => {
  return `Bonjour, je m'appelle ${params}`;
};

const pres = maFunction("Julien");

const tableau = ["BOB"];
console.log(tableau[0]);

const object = {
  name: "BOB",
};
console.log(object.name);

for (let i = 0; i < tableau.length; i++) {
  console.log(tableau[i]);
}

if (object.name === "BOB") {
  console.log("BOB, sur");
} else {
  console.log(pres);
}

const test = () => {
  console.log("test");
};

test();
