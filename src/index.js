const $form = document.querySelector("#Exchange");
const $fecha = document.querySelector("#fecha");
const $base = document.querySelector("#base");
const $tabla = document.querySelector("#tabla");
const $spinner = document.querySelector("#spinner");
import {  resolverLlamada } from "./api.js";
import {  mostrarTabla } from "./ui.js";
import { cargarInputs } from "./cambios.js";

cargarInputs($base, $fecha);


$form.addEventListener("submit", (e) => {
  $tabla.innerHTML = "";
  let llamada = { fecha: $fecha.value || undefined, moneda: $base.value };
  resolverLlamada(llamada).then((datos) => {
    mostrarTabla(datos, $spinner, $tabla);
  });
  e.preventDefault();
});
