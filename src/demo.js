let ratesTODAY = {};
let ratesOTHERDAY = {};
getRatesDeLaApi(value)
  .then((res) => {
    ratesTODAY = { res };
    console.log(ratesTODAY);
    cell1 = crearCell(Object.keys(res.rates));
    cell2 = crearCell(Object.values(res.rates));
    rows = crearRows(Object.values(res.rates).length);
    rows.forEach((el) => {
      $tablaCuerpo.appendChild(el);
    });
    console.log(cell1);
    document.querySelectorAll(".valor").forEach((el, i) => {
      el.appendChild(cell1[i]);
      el.appendChild(cell2[i]);
    });
  })
  .catch((err) => console.error(err));

getRatesDeLaApi(value, fecha)
  .then((res) => {
    cell3 = crearCell(Object.values(res.rates));
    document.querySelectorAll(".valor").forEach((el, i) => {
      el.appendChild(cell3[i]);
    });
  })
  .catch((err) => console.error(err));
crearTitulo($base.value, $fecha.value);
$table.classList = "";
