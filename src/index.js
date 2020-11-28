const $form = document.querySelector("#Exchange");
const $fecha = document.querySelector("#fecha");
const $base = document.querySelector("#base");


const $tabla = document.querySelector("#tabla");
const $spinner = document.querySelector("#spinner");

cargarForm($base);

cargarOpciones($base);
configurarInputFecha($fecha);

$form.addEventListener("submit", (e) => {
  $tabla.innerHTML = "";

  let llamada = { fecha: $fecha.value || undefined, moneda: $base.value };
  resolverLlamada(llamada).then((datos) => {
    mostrarTabla(datos, $spinner, $tabla);
  });

  e.preventDefault();
  
});
