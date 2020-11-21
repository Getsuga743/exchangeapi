const $form = document.querySelector("#Exchange");
const $fecha = document.querySelector("#fecha");
const $base = document.querySelector("#base");
const $divResultado = document.querySelector("#resultadoMoneda");
const $tabla = document.querySelector("#tabla");
const $spinner = document.querySelector("#spinner");

const cargarOpciones = (el) => {
  getMonedas()
    .then((res) => {
      return Object.keys(res.rates).concat("EUR").sort();
    })
    .then((monedas) => {
      return cargarForm(el, monedas);
    });
};

$form.addEventListener("submit", (e) => {
  $tabla.innerHTML = "";
  resolverLlamada({ fecha: $fecha.value, moneda: $base.value }).then(
    (datos) => {
      mostrarTabla(datos, $spinner, $tabla);
    },
  );
  e.preventDefault();
});

//resuelve las promesas,crea tabla con la data, si algo sale mal, renderiza un error

cargarOpciones($base);
