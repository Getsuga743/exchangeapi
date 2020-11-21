//==============================
// Metodos de llamada a la API
//==============================

async function getMonedas(fecha = "latest", base = "EUR") {
  const response = await fetch(
    `https://api.exchangeratesapi.io/${fecha}?base=${base}`,
  );
  const fetchJson = await response.json();
  return fetchJson;
}

async function resolverLlamada(objeto) {
  console.log(objeto)
  if (objeto.fecha === "") {
    return await getMonedas("latest", objeto.moneda);
  }
  else{
     return await getMonedas(objeto.fecha, objeto.value);
  }
}
