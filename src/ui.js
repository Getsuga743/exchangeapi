const $fecha = document.querySelector("#fecha");
const $base = document.querySelector("#base");
const $exchange = document.querySelector("#exchange");
const $form = document.querySelector("#Exchange");
const $table = document.querySelector("#tabla");
const $tablaCuerpo = document.querySelector(".cuerpo-tabla");
const $tablaTituloVal = document.querySelector(".value");
const $tablaTituloFecha = document.querySelector(".date");

let columna = [];
let valores;

async function iniciar() {
  let divisas = await obtenerCambios();
  cargarOptions(divisas);
  $form.addEventListener("submit", (e) => {
    $tablaCuerpo.textContent=""
    let value;
    let fecha = $fecha.value;

    if ($fecha.value === "") {
      fecha = "latest";
      getCall(value, fecha)
        .then((res) => {
          console.log(res);
          cell1 = crearCell(Object.keys(res.rates));
          cell2 = crearCell(Object.values(res.rates));
          rows = crearRows(Object.values(res.rates).length);
          rows.forEach((el) => {
            $tablaCuerpo.appendChild(el);
          });
          console.log(cell1);
          document.querySelectorAll(".valor").forEach((el, i) => {
            el.appendChild(cell1[i]);
            el.appendChild(cell2[i]);
          });
        })
        .catch((err) => console.error(err));
    }
    if ($fecha.value != "") {
      document.querySelector(".date").classList = "date";
      getCall(value)
        .then((res) => {
          console.log(res);
          cell1 = crearCell(Object.keys(res.rates));
          cell2 = crearCell(Object.values(res.rates));
          rows = crearRows(Object.values(res.rates).length);
          rows.forEach((el) => {
            $tablaCuerpo.appendChild(el);
          });
          console.log(cell1);
          document.querySelectorAll(".valor").forEach((el, i) => {
            el.appendChild(cell1[i]);
            el.appendChild(cell2[i]);
          });
        })
        .catch((err) => console.error(err));

      getCall(value, fecha)
        .then((x) => {
          cell3 = crearCell(Object.values(x.rates));
          document.querySelectorAll(".valor").forEach((el, i) => {
            el.appendChild(cell3[i]);
          });
        })
        .catch((err) => console.error(err));
    }
    crearTitulo($base.value, $fecha.value);
    $table.classList = "";

    e.preventDefault();

  });
}

async function getCall(val1, val2) {
  let foo = await getMonedas(val1, val2);
  return foo;
}

function cargarOptions(monedas) {
  monedas.forEach((element) => {
    const option = document.createElement("option");
    const valor = element;
    option.value = valor;
    option.text = valor;
    $base.appendChild(option);
  });
}

function crearCell(content) {
  let cells = [];
  for (let i = 0; i < content.length; i++) {
    let td = document.createElement("td");
    td.innerText = content[i];
    cells.push(td);
  }
  return cells;
}
function crearRows(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    let tr = document.createElement("tr");
    tr.classList.add("valor");
    arr.push(tr);
  }
  return arr;
}

function crearTitulo(val = "EUR", date) {
  let valHTML = $tablaTituloVal;
  let dateHTML = $tablaTituloFecha;
  valHTML.textContent = `Base: ${val}`;
  dateHTML.textContent = `Fecha: ${date}`;
}

function ocultarElemento(el) {
  el.classList.add("oculto");
}

