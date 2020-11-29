import { getMonedas } from "./api.js";
import { cargarForm,configurarInputFecha } from "./ui.js";

export const cargarInputs = async (el, date) => {
  let res = await getMonedas();
  let monedas = Object.keys(res.rates);
  configurarInputFecha(date);
  return await cargarForm(el, monedas);
};
