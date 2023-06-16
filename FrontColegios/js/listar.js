const URL = "http://localhost:3000/api/reportes/";
const bodyContent = document.querySelector("#bodyContent");

async function Listar() {
  const response = await fetch(URL);
  const data = await response.json();
  const dataReportes = data.reportes;
  bodyContent.innerHTML = dataReportes.map((reporte) => {
    return `<tr>
            <td>${reporte.direccion}</td>
            <td>${reporte.latitud}</td>
            <td>${reporte.longitud}</td>
            <td>${reporte.descripcion}</td>
            <td>${reporte.fachaReporte}</td>
            <td><a href='editarReporte.html?${reporte._id}'>Editar</a>
            <button id='btnEliminar' onclick='Eliminar("${reporte._id}")'>Eliminar</button></td>
        </tr>`;
  });
}

Listar();

async function Eliminar(id) {
  // el id se le envía por el body de la consulta
  const response = await fetch(URL, {
    method: "DELETE",
    body: JSON.stringify({ _id: id }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  Listar();
}
