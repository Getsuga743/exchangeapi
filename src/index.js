const $form = document.querySelector("#Exchange");
const $fecha = document.querySelector("#fecha");
const $base = document.querySelector("#base");
<<<<<<< HEAD
const $moneda = document.querySelector("#moneda");
=======
>>>>>>> 44b67062a7430b3c24f34bc4b413a8af3da8fcbf
const $divResultado = document.querySelector("#resultadoMoneda");
const $tabla = document.querySelector("#tabla");
const $spinner = document.querySelector("#spinner");

<<<<<<< HEAD
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

=======
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
>>>>>>> 44b67062a7430b3c24f34bc4b413a8af3da8fcbf
