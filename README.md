# changement pour couleur du bouton


a rajouter sur le programme dans le raspberry PI
**style.css ***
.emergencyMode {
    background-color: #ff0000; /* Rouge foncé */
}

**common.js ***
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

**pour les pages ***
<script src="js/app.js"></script>




**Dans mon python ***
avant d'envoyer la page , on check si c login sa l'ouvre .





