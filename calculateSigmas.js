var selectedEstabilidad = null;

function setEstabilidad(estabilidad) {
  if (selectedEstabilidad) {
    selectedEstabilidad.classList.remove('selected');
  }
  selectedEstabilidad = document.getElementById('btn' + estabilidad);
  selectedEstabilidad.classList.add('selected');
}

function calculateSigmas() {
  try {
    var x = parseFloat(document.getElementById('x').value);
    if (!selectedEstabilidad) {
      throw new Error('Debes seleccionar una estabilidad');
    }
    var estabilidad = selectedEstabilidad.innerText;

    if (!isNaN(x)){
    var s_y = sigma_y(x, estabilidad).toFixed(5);
    var s_z = sigma_z(x, estabilidad).toFixed(5);

    document.getElementById('result_s_y').textContent =  s_y +" m";
    document.getElementById('result_s_z').textContent =  s_z +" m";
    }
    else{
      throw new Error('Debes seleccionar una distancia');
    }
  } catch (error) {
    document.getElementById('result_s_y').textContent = "Error: " + error.message;
    document.getElementById('result_s_z').textContent = "Error: " + error.message;
  }
}