let emergencyMode = false;

function toggleEmergency() {
  // Inversez l'état du mode d'urgence
  emergencyMode = !emergencyMode;

  // Obtenez tous les boutons sur la page
  const button = document.getElementById('eStop');

    // Ajoutez ou supprimez la classe "emergencyMode" en fonction de l'état d'urgence
    if (emergencyMode) {
      button.classList.add('emergencyMode');
    } else {
      button.classList.remove('emergencyMode');
    }
  
}
