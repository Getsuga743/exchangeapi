const $form = document.querySelector("#Exchange");
const $fecha = document.querySelector("#fecha");
const $base = document.querySelector("#base");
const $moneda = document.querySelector("#moneda");
const $divResultado = document.querySelector("#resultadoMoneda");
const $tabla = document.querySelector("#tabla");
const $spinner = document.querySelector("#spinner");

cargarForm($base);

$form.addEventListener("submit", (e) => {
  $tabla.innerHTML = "";
  let datosForm = [
    { fecha: $fecha.value, moneda: $base.value },
    { fecha: $fecha.value, moneda: $base.value },
  ];
  console.log(datosForm)
  mostrarTabla(datosForm,$spinner,$tabla);
  e.preventDefault();
  
});

