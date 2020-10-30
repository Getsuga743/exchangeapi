const $fecha = document.querySelector("#fecha");
const $base = document.querySelector("#base");
const $exchange = document.querySelector("#exchange");
const $form = document.querySelector("#Exchange");
const $table = document.querySelector("#tabla");
const $tablaCuerpo = document.querySelector(".cuerpo-tabla");
const $tablaTituloVal = document.querySelector(".value");
const $tablaTituloFecha = document.querySelector(".date");

async function iniciar() {
  let divisas = await obtenerCambios();
  let ArrFetch = [];
  cargarOptions(divisas);
  $form.addEventListener("submit", (e) => {
    $tablaCuerpo.textContent = "";
    let value = $base.value || "EUR";
    let fecha = $fecha.value || "latest";
    if ($fecha.value === "") {
      console.log("no hay fecha");
      getRatesDeLaApi(value, fecha).then((res) => {
        ArrFetch.push(res);
      });
    }
    if ($fecha.value != "") {
      document.querySelector(".date").classList = "date";
      getRatesDeLaApi(value).then((res) => {
        ArrFetch.push(res);
      });
      getRatesDeLaApi(value, fecha).then((res) => {
        ArrFetch.push(res);
      });
      console.log(ArrFetch);
      CargarLosDatos(ArrFetch);
      crearTitulo($base.value, $fecha.value);
      $table.classList = "";
    }
    ArrFetch = [];
    e.preventDefault();
  });
}

iniciar();
