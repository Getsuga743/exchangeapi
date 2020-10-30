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
  let arr = [];
  let Cells = [];
  for (let i = 0; i <= content.length - 1; i++) {
    if (i < 1) {
      arr.push(Object.keys(content[i].rates));
      arr.push(Object.values(content[i].rates));
    } else {
      arr.push(Object.values(content[i].rates));
    }
  }
  arr.forEach((element, index) => {
    let Column = [];
    element.forEach((el, i) => {
      let _td = document.createElement("td");
      _td.textContent = el;
      Column.push(_td);
    });
    Cells.push(Column);
    Column = [];
  });
  return Cells;
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
  let value = val || "EUR";
  let DATE = date || "latest";
  console.log(DATE, value);
  let valHTML = $tablaTituloVal;
  let dateHTML = $tablaTituloFecha;
  valHTML.textContent = `Base: ${value}`;
  if (date) {
    dateHTML.textContent = `Fecha: ${DATE}`;
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

function cargarCeldas(arr, num) {
  console.log(arr);
  console.log(num);
  switch (num) {
    case 1:
      document.querySelectorAll(".valor").forEach((el, i) => {
        el.appendChild(arr[0][i]);
      });
      break;
    case 2:
      document.querySelectorAll(".valor").forEach((el, i) => {
        el.appendChild(arr[0][i]);
        el.appendChild(arr[1][i]);
      });
      break;
    case 3:
      document.querySelectorAll(".valor").forEach((el, i) => {
        el.appendChild(arr[0][i]);
        el.appendChild(arr[1][i]);
        el.appendChild(arr[2][i]);
      });
      break;
  }
}
function HacerTabla(arr) {
  let Cells = crearCell(arr);
  console.log(Cells);
  let rows = crearRows(Cells[0].length);
  rows.forEach((el) => {
    $tablaCuerpo.appendChild(el);
  });
  cargarCeldas(Cells, Cells.length);
  crearTitulo($base.value, $fecha.value);
}

async function CargarLosDatos(arr) {
  await HacerTabla(arr);
}
