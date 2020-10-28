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
  cargarOptions(divisas);
  $form.addEventListener("submit", (e) => {
    $tablaCuerpo.textContent = "";
    let value = $base.value;
    let fecha = $fecha.value;
    let ratesTODAY;
    let ratesOTHERDAY;
    //si no hay fecha, es el parametro  es latest
    if ($fecha.value === "") {
      fecha = "latest";
      getRatesDeLaApi(value, fecha).then((res) => {
        ratesTODAY = res;
      });
    }
    if ($fecha.value != "") {
      document.querySelector(".date").classList = "date";
      getRatesDeLaApi(value).then((res) => {
        ratesTODAY = {};
        ratesTODAY = res;
      });
      getRatesDeLaApi(value, fecha)
        .then((res) => {
          ratesOTHERDAY = res;
        })
        .then(() => {
          console.log(ratesTODAY);
          if (fecha != "latest") {
            CargarLosDatos(
              Object.keys(ratesTODAY.rates),
              Object.values(ratesTODAY.rates),
              Object.values(ratesOTHERDAY.rates)
            )
              .then((res) => {
                console.log("succes");
              })
              .catch((err) => {
                console.log(err);
              });
            console.log(ratesTODAY);
          } else {
            let celda1 = crearCell(Object.keys(ratesTODAY.rates));
            let celda2 = crearCell(Object.values(ratesTODAY.rates));
            crearRows(celda1.length);
            document.querySelectorAll(".valor").forEach((el, i) => {
              el.appendChild(cell1[i]);
              el.appendChild(cell2[i]);
            });
            crearTitulo($base.value, $fecha.value);
          }
          $table.classList = "";
        });
    }
    e.preventDefault();
  });
}

iniciar();
