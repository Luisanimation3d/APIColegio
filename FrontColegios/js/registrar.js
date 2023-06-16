const crearReporte = document.querySelector('#crearReporte')

crearReporte.addEventListener('submit', Registrar)

async function Registrar(e){
    e.preventDefault()
    const URL = 'http://localhost:3000/api/reportes/'
    const direccion = document.querySelector('#direccion').value
    const latitud = document.querySelector('#latitud').value
    const longitud = document.querySelector('#longitud').value
    const descripcion = document.querySelector('#descripcion').value
    const reporte = {
        direccion,
        latitud,
        longitud,
        descripcion
    }
    const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(reporte),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    console.log(data)
    alert('Reporte registrado exitosamente')
    window.location.href = 'listarReportes.html'
}