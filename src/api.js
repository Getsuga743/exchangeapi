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
//esta función era porque queria convertir la web para renderizar mas de un llamado
async function resolverLlamados(arr) {
  return await Promise.all(
    arr.map((el) => getMonedas((el.fecha = "latest"), el.moneda)),
  )
    .then((res) => {
      return res;
    })
    .catch((err) => err);
}
