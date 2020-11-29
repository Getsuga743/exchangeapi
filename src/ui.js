//==============================
// Metodos de la interfaz
//==============================

// Carga de las opciones en el formulario

export async function cargarForm(el, list) {
  list.forEach((item) => {
    let option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    el.append(option);
  });
}
// mantiene actualizada la fecha del formulario
export function configurarInputFecha(calendario) {
  const hoy = new Date().toISOString().split("T")[0];
  calendario.max = hoy;
}

//Creacion de la tabla

function crearHeadTable(base) {
  let thead = document.createElement("thead");
  thead.innerHTML = `<th scope="col">Moneda:${base}</th>
                      <th scope="col">Precio</th>`;
  return thead;
}
function crearBodyTable(divisas) {
  const $tbody = document.createElement("tbody");
  Object.entries(divisas).map((divisa) => {
    const tr = document.createElement("tr");
    divisa.map((el, index) => {
      const td = document.createElement("td");

      if (index === 1) {
        el = el.toFixed(3);
      }
      td.textContent = el;

      return tr.appendChild(td);
    });
    return $tbody.appendChild(tr);
  });

  return $tbody;
}

function CrearTabla(rates, base) {
  const $table = document.createElement("table");
  const $tbody = crearBodyTable(rates);
  const $thead = crearHeadTable(base);
  $table.appendChild($thead);
  $table.className = "table table-striped table-dark text-center table-sm";
  $table.appendChild($tbody);
  return $table;
}

// render de los elementos

function renderizarTabla(obj) {
  const { rates, base } = obj;
  const tablaCreada = CrearTabla(rates, base);
  return tablaCreada;
}

function renderizarError(text) {
  const $error = document.createElement("div");
  $error.className = "alert alert-danger";
  $error.textContent = text;
  return $error;
}

function cargarResultados(container, data) {
  console.log(data);
  if (data != undefined && Object.keys(data).length != 0) {
    let tabla = renderizarTabla(data);
    container.appendChild(tabla);
  } else {
    container.appendChild(renderizarError("hubo un error, intente de nuevo"));
  }
}

export function mostrarTabla(datosForm, spinner, tabla) {
  spinner.classList.remove("oculto");
  setTimeout(() => {
    spinner.classList.add("oculto");
    cargarResultados(tabla, datosForm);
  }, 500);
}
