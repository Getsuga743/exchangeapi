//==============================
// Metodos de la interfaz
//==============================

// Carga de las opciones en el formulario

async function cargarForm(el) {
  let List = await getMonedas().then(({ rates }) => {
    return Object.keys(rates).concat("EUR");
  });
  List.forEach((item) => {
    let option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    el.append(option);
  });
}

//Creacion de la tabla

function crearHeadTable(base) {
  let thead = document.createElement("thead");
  thead.innerHTML = `<th scope="col">Moneda:${base}</th>
                      <th scope="col">Precio</th>`;
  return thead;
}
function crearBodyTable(data) {
  let $tbody = document.createElement("tbody");
  Object.entries(data).map((dato) => {
    let tr = document.createElement("tr");
    dato.map((el, index) => {
      let td = document.createElement("td");

      if (index === 1) {
        el = el.toFixed(3);
      }
      td.textContent = el;

      tr.appendChild(td);
    });
    $tbody.appendChild(tr);
  });

  return $tbody;
}

function CrearTable(rates, base) {
  let $table = document.createElement("table");
  let $tbody = crearBodyTable(rates);
  let $thead = crearHeadTable(base);
  $table.appendChild($thead);
  $table.className = "table table-striped table-dark text-center table-sm";
  $table.appendChild($tbody);
  return $table;
}

//render de los elementos

function renderizarTabla([obj]) {
  let { rates, base } = obj;
  let tablaCreada = CrearTable(rates, base);
  return tablaCreada;
}

function renderizarError(text) {
  let $error = document.createElement("div");
  $error.className = "alert alert-danger";
  $error.textContent = text;
  return $error;
}

//resuelve las promesas,crea tabla con la data, si algo sale mal, renderiza un error
function cargarResult(container, data) {
  resolverLlamados(data)
    .then((data) => container.appendChild(renderizarTabla(data)))
    .catch(() => {
      container.appendChild(renderizarError("Hubo un error, intente de nuevo"));
    });
}

function mostrarTabla(datosForm, spinner, tabla) {
  spinner.classList.remove("oculto");
  setTimeout(() => {
    spinner.classList.add("oculto"), cargarResult(tabla, datosForm);
  }, 500);
}
