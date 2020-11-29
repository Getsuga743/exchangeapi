// ==============================
// Metodos de llamada a la API
// ==============================

export async function getMonedas(fecha = "latest", base = "EUR") {
  const response = await fetch(
    `https://api.exchangeratesapi.io/${fecha}?base=${base}`,
  );
  const fetchJson = await response.json();
  return fetchJson;
}


export async function resolverLlamada(objeto) {
  const [fecha, value] = Object.values(objeto);
  const llamada = await getMonedas(fecha, value);
  return llamada;

}
