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

//metodo de llamada a la api
function obtenerCambios(base = "EUR", fecha = "latest") {
  return fetch(`https://api.exchangeratesapi.io/${fecha}?base=${base}`)
    .then((res) => res.json())
    .then((resJSON) => {
      return Object.keys(resJSON.rates).concat("EUR");
    });
}

function getMonedas(base = "EUR", fecha = "latest") {
  return fetch(`https://api.exchangeratesapi.io/${fecha}?base=${base}`)
    .then((res) => res.json())
    .then((resJSON) => {
      return resJSON.rates;
    });
}
//con esto se obtiene la informacion para el los selects del formulario
// function obtenerMonedas() {
//   obtenerCambios().then((cambios) => {
//     Object.keys(cambios).concat("EUR");
//   })
// }

function cargarOptions(monedas) {
  monedas.forEach((element) => {
    const option = document.createElement("option");
    const valor = element;
    option.value = valor;
    option.text = valor;
    $base.appendChild(option);
  });
}
