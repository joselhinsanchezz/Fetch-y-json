const DATA_URL = "json/data.json"; // URL del archivo JSON

const container = document.getElementById("container"); // Selecciona el contenedor donde se mostrarán los datos

/**
 * Función que recibe un array de datos y los muestra en el contenedor.
 * Por cada ítem en el array, crea un párrafo con el nombre y apellido.
 */
function showData(dataArray) {
  const content = dataArray.map(item => `<p>${item.name} ${item.lastname}</p>`).join('');
  container.innerHTML = content;
}

// Realiza la solicitud fetch para obtener los datos y mostrarlos
fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Error al cargar los datos");
    }
    return response.json();
  })
  .then(data => {
    if (Array.isArray(data.students)) {
      showData(data.students);
    } else {
      console.error("El formato de datos no es el esperado.");
    }
  })
  .catch(error => {
    console.error("Hubo un problema con la petición Fetch realizada:", error);
  });