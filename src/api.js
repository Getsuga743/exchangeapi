//==============================
// Metodos de llamada a la API
//==============================

async function getMonedas(fecha = "latest", base = "EUR") {
  const response = await fetch(
    `https://api.exchangeratesapi.io/${fecha}?base=${base}`,
  );
  const fetchJson = await response.json();
  return fetchJson;
<<<<<<< HEAD
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
=======
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
>>>>>>> 44b67062a7430b3c24f34bc4b413a8af3da8fcbf
