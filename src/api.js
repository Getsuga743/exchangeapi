
//==============================
// Metodos de llamada a la API
//==============================

//----------
//devuelve los nombres de las monedas
async function obtenerCambios(base = "EUR", fecha = "latest") {
  let nombresMonedas = await fetch(
    `https://api.exchangeratesapi.io/${fecha}?base=${base}`
  );

  nombresMonedas = await nombresMonedas.json();
  return Object.keys(nombresMonedas.rates).concat("EUR");
}
//devuelve un json con los rates de intercambio
async function getMonedas(base, fecha) {
  return fetch(`https://api.exchangeratesapi.io/${fecha}?base=${base}`)
    .then((res) => res.json())
    .then((resJSON) => {
      return resJSON;
    });
}

async function getRatesDeLaApi(val1 = "EUR", val2 = "latest") {
  let foo = await getMonedas(val1, val2);
  return foo;
}

