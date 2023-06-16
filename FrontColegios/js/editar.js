const formEditar = document.querySelector("#formEditar");
const URL = "http://localhost:3000/api/reportes/";

async function CrearFormularioEditar() {
  const response = await fetch(URL);
  const data = await response.json();
  const dataReportes = data.reportes;
  const idReporte = window.location.search.split("?")[1];
  const reporte = dataReportes.find((reporte) => reporte._id === idReporte);
  formEditar.innerHTML = `
    <div class="inputControl">
    <input type="text" name="direccion" id="direccion" placeholder="direccion" value="${reporte.direccion}" required>
    <label for="direccion">Direccion</label>
</div>
<div class="inputControl">
    <input type="text" name="latitud" id="latitud" placeholder="latitud" value="${reporte.latitud}" required>
    <label for="latitud">Latitud</label>
</div>
<div class="inputControl">
    <input type="text" name="longitud" id="longitud" placeholder="longitud" value="${reporte.longitud}" required>
    <label for="longitud">Longitud</label>
</div>
<div class="inputControl">
    <textarea name="descripcion" id="descripcion" cols="30" rows="10" required>${reporte.descripcion}</textarea>
</div>
<button>Actualizar Reporte</button>
    `;
}

window.onload = CrearFormularioEditar();


formEditar.addEventListener("submit", Editar);

async function Editar(e) {
    e.preventDefault();
    const direccion = document.querySelector("#direccion").value;
    const latitud = document.querySelector("#latitud").value;
    const longitud = document.querySelector("#longitud").value;
    const descripcion = document.querySelector("#descripcion").value;
    const idReporte = window.location.search.split("?")[1];
    const reporte = {
        _id : idReporte,
        direccion,
        latitud,
        longitud,
        descripcion,
    };
    const response = await fetch(URL, {
        method: "PUT",
        body: JSON.stringify(reporte),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    alert("Reporte actualizado exitosamente");
    window.location.href = "listarReportes.html";
}