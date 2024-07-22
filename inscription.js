const menuBar = document.getElementById("menu-bar");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavItems = document.querySelector(".mobile-nav-items");

const closeBar = document.getElementById("close-btn");

menuBar.addEventListener("click", () => {

  if (mobileNavItems.style.display == "") {
    mobileNavItems.style.display = "flex";
  }
})

  closeBar.addEventListener("click", () => {

  if (mobileNavItems.style.display == "flex") {
    mobileNavItems.style.display = "";
  }
})

document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const nationalite = document.getElementById('nationalite').value;
  const gender = document.getElementById('gender').value;

  // Créer un objet étudiant
  const etudiant = {
      nom: nom,
      prenom: prenom,
      nationalite: nationalite,
      gender: gender
  };

  // Récupérer les inscriptions existantes du localStorage
  let listeEtudiant = JSON.parse(localStorage.getItem('listeEtudiant')) || [];

  // Ajouter le nouvel étudiant à la liste
  listeEtudiant.push(etudiant);

  // Enregistrer la liste mise à jour dans le localStorage
  localStorage.setItem('listeEtudiant', JSON.stringify(listeEtudiant));

  alert('Inscription réussie !');
});

// Optionnel : afficher les inscriptions enregistrées
function afficherInscriptions() {
  let listeEtudiant = JSON.parse(localStorage.getItem('listeEtudiant')) || [];
  console.log(listeEtudiant);

  // Pour afficher les inscriptions sur la page (optionnel)
  const inscriptionList = document.getElementById('inscriptionList');
  if (inscriptionList) {
      inscriptionList.innerHTML = '';
      listeEtudiant.forEach((etudiant, index) => {
          const li = document.createElement('li');
          li.textContent = `Nom: ${etudiant.nom}, Prénom: ${etudiant.prenom}, Nationalité: ${etudiant.nationalite}, Genre: ${etudiant.gender}`;
          inscriptionList.appendChild(li);
      });
  }
}

// Appeler la fonction pour afficher les inscriptions au chargement de la page (optionnel)
document.addEventListener('DOMContentLoaded', afficherInscriptions);
console.log(JSON.parse(localStorage.getItem('listeEtudiant')));
