// fetch("https://api.exchangeratesapi.io/latest")
//   .then(respuesta => respuesta.json())
//   .then(respuestaJSON => {
//     $("h1").text(
//       `Cambios del día ${respuestaJSON.date} en base ${respuestaJSON.base}`
//     );

//     $("ul").html('');

//     Object.keys(respuestaJSON.rates).forEach(moneda => {
//       $("ul").append($(`<li>${moneda}: ${respuestaJSON.rates[moneda]}</li>`));
//     });
//   })
//   .catch(error => console.error("FALLÓ", error));

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
async function getMonedas(base = "EUR", fecha = "latest") {
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

//con esto se obtiene la informacion para el los selects del formulario
// function obtenerMonedas() {
//   obtenerCambios().then((cambios) => {
//     Object.keys(cambios).concat("EUR");
//   })
// }
