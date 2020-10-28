//==============================
// Metodos de la interfaz
//==============================

//carga las opciones del formulario

function cargarOptions(monedas) {
  monedas.forEach((element) => {
    const option = document.createElement("option");
    const valor = element;
    option.value = valor;
    option.text = valor;
    $base.appendChild(option);
  });
}
//==============================
// funciones para crear la tabla
//==============================
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
//crea el titulo, si no hay fecha definida, no hace la segunda columna
function crearTitulo(val, date) {
  let valHTML = $tablaTituloVal;
  let dateHTML = $tablaTituloFecha;
  if (val === "") {
    val = "EUR";
  }
  valHTML.textContent = `Base: ${val}`;
  if (date) {
    dateHTML.textContent = `Fecha: ${date}`;
  } else {
    ocultarElemento(dateHTML);
  }
}
//-----------------------------

function ocultarElemento(el) {
  el.classList.add("oculto");
}

function ObtenerfechaHoy() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  return today;
}

function cargarCeldas(cell1, cell2, cell3) {
  document.querySelectorAll(".valor").forEach((el, i) => {
    el.appendChild(cell1[i]);
    el.appendChild(cell2[i]);
    el.appendChild(cell3[i]);
  });
}
function HacerTabla(cel1, cel2, cel3) {
  let celda1 = crearCell(cel1);
  let celda2 = crearCell(cel2);
  let celda3 = crearCell(cel3);
  let rows = crearRows(celda1.length);
  rows.forEach((el) => {
    $tablaCuerpo.appendChild(el);
  });
  cargarCeldas(celda1, celda2, celda3);
  crearTitulo($base.value, $fecha.value);
}

async function CargarLosDatos(cel1, cel2, cel3) {
  await HacerTabla(cel1, cel2, cel3);
}
