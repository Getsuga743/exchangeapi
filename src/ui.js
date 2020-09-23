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
  return cargarOptions(divisas);
}

async function getCall(val1, val2) {
  let foo = await getMonedas(val1, val2);
  return foo;
}

$form.addEventListener("submit", (e) => {
  value = $base.value;
  fecha = $fecha.value;
  console.log(fecha);
  if (fecha === "") {
    fecha = "latest";
  }
  if (fecha != "") {
    value2 = getCall(value)
      .then((x) => {
        valores = x;
        agregarTabla2(x);
      })
      .catch((err) => console.error(err));
  }
  crearTitulo(value, fecha);
  value = getCall(value, fecha)
    .then((x) => {
      valores = x;
      agregarTabla(x);
    })
    .catch((err) => console.error(err));
  setTimeout(() => {
    console.log("yay");
    finalizarTabla();
  }, 2000);
  $table.classList = "";

  e.preventDefault();
});
//agrega a la tabla filas con dos celdas, con el nombre de la moneda y el valor
function agregarTabla(val) {
  for (const property in val) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td1 = document.createElement("td");
    td.textContent = property;
    td1.textContent = val[property];
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.classList.add("valor");
    $tablaCuerpo.appendChild(tr);
  }
}
function agregarTabla2(val) {
  for (const property in val) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.textContent = val[property];
    tr.appendChild(td1);
    columna.push(tr);
  }
}

function finalizarTabla() {
  let rows = document.querySelectorAll(".valor");
  return rows.forEach((el, index) => {
    let x = el.insertCell(-1);
    x.innerText = columna[index].textContent;
  });
}
function crearTitulo(val, date) {
  let valHTML = $tablaTituloVal;
  let dateHTML = $tablaTituloFecha;
  valHTML.textContent = `Base: ${val}`;
  dateHTML.textContent = `Fecha: ${date}`;
}

function ocultarElemento(el) {
  el.classList.add("oculto");
}

iniciar();
