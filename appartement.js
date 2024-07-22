// Sélectionne les éléments HTML nécessaires pour la navigation mobile et les boutons de fermeture
const menuBar = document.getElementById("menu-bar");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavItems = document.querySelector(".mobile-nav-items");
const closeBar = document.getElementById("close-btn");

// Ajoute un événement lorsque le bouton de menu est cliqué
menuBar.addEventListener("click", () => {
  // Vérifie si le menu mobile est caché, puis l'affiche
  if (mobileNavItems.style.display == "") {
    mobileNavItems.style.display = "flex";
  }
});

// Ajoute un événement lorsque le bouton de fermeture est cliqué
closeBar.addEventListener("click", () => {
  // Vérifie si le menu mobile est affiché, puis le cache
  if (mobileNavItems.style.display == "flex") {
    mobileNavItems.style.display = "";
  }
});

// Affiche le formulaire d'ajout de propriété
function showAddPropertyForm() {
  document.getElementById('AjouterAppartement').style.display = 'block';
}

// Ferme le formulaire d'ajout de propriété
function closeAddPropertyForm() {
  document.getElementById('AjouterAppartement').style.display = 'none';
}

// Ajoute une nouvelle propriété à la liste
function addNewProperty(event) {
  event.preventDefault();

  // Récupère les valeurs du formulaire
  const image = document.getElementById('image').value;
  const address = document.getElementById('address').value;
  const description = document.getElementById('description').value;
  const bedrooms = document.getElementById('bedrooms').value;
  const bathrooms = document.getElementById('bathrooms').value;
  const area = document.getElementById('area').value;
  const price = document.getElementById('price').value;

  // Crée une nouvelle carte pour la propriété
  const propertyCard = document.createElement('div');
  propertyCard.className = 'col-md-4';
  propertyCard.innerHTML = `
    <div class="card h-100 shadow-sm">
      <div class="card-img-top" style="background-image: url('${image}'); background-size: cover; height: 300px; border-top-left-radius: .25rem; border-top-right-radius: .25rem;"></div>
      <div class="card-body text-center">
        <h2 class="card-title">${address}</h2>
        <p class="card-text">${description}</p>
        <div class="d-flex justify-content-around">
          <div>
            <p class="mb-0">Chambres</p>
            <p class="mb-0"><i class="fa-solid fa-bed"></i> ${bedrooms}</p>
          </div>
          <div>
            <p class="mb-0">Salles de bain</p>
            <p class="mb-0"><i class="fa-solid fa-shower"></i> ${bathrooms}</p>
          </div>
          <div>
            <p class="mb-0">Surface</p>
            <p class="mb-0"><i class="fa-regular fa-square"></i> ${area} sq ft</p>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <p class="mb-0">À vendre</p>
        <h2 class="text-primary">$${price}</h2>
      </div>
    </div>
  `;

  // Ajoute la nouvelle carte à la section des propriétés
  const propertiesContainer = document.getElementById('appartement');
  propertiesContainer.appendChild(propertyCard);

  // Ferme le formulaire d'ajout de propriété
  closeAddPropertyForm();

  // Réinitialise le formulaire
  document.getElementById('AppartementFormulaire').reset();
}

// Ajoute un événement pour la soumission du formulaire d'ajout de propriété
document.getElementById('AppartementFormulaire').addEventListener('submit', addNewProperty);

// Affiche le formulaire de connexion
function showLoginForm() {
  document.getElementById('LoginModal').style.display = 'block';
}

// Ferme le formulaire de connexion
function closeLoginForm() {
  document.getElementById('LoginModal').style.display = 'none';
}

// Tableau des utilisateurs (à remplacer par vos données d'utilisateur réelles)
const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' },
  { username: 'keita', password: 'keita123', role: 'admin' },
];

// Fonction pour gérer la soumission du formulaire de connexion
function loginUser(event) {
  event.preventDefault();

  // Récupère les valeurs du formulaire de connexion
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Trouve l'utilisateur dans le tableau
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Stocke les informations de l'utilisateur dans le localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));

    // Actions optionnelles après une connexion réussie
    console.log('Connecté en tant que:', user.username, 'Rôle:', user.role);
    alert("Connexion réussie");
    checkUserRoleAndPerformActions();

    // Ferme le formulaire de connexion
    closeLoginForm();

    // Réinitialise le formulaire de connexion
    document.getElementById('LoginForm').reset();
  } else {
    alert('Nom d\'utilisateur ou mot de passe incorrect');
  }
}

// Ajoute un événement pour la soumission du formulaire de connexion
document.getElementById('LoginForm').addEventListener('submit', loginUser);

// Fonction pour déconnecter l'utilisateur
function logoutUser() {
  localStorage.removeItem('currentUser');
  checkUserRoleAndPerformActions();
}

// Fonction pour vérifier le rôle de l'utilisateur et effectuer des actions
function checkUserRoleAndPerformActions() {
  // Récupère l'utilisateur actuel depuis le localStorage
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser) {
    document.getElementById("logInfo").style.display = 'block';
    document.getElementById('username1').innerHTML = currentUser.username;

    // Vérifie le rôle de l'utilisateur
    if (currentUser.role === 'admin') {
      document.getElementById('addBTN').style.display = 'block';
      showAdminLogo(); // Affiche le logo administrateur si l'utilisateur est admin
      document.querySelectorAll(".deleteBtn").forEach((btn)=>{
        btn.style.display = 'block';
      })
      
    } else {
      document.getElementById('addBTN').style.display = 'none';
      hideAdminLogo(); // Cache le logo administrateur si l'utilisateur n'est pas admin

      document.querySelectorAll(".deleteBtn").forEach((btn)=>{
        btn.style.display = 'none';
      })
    }
  } else {
    document.getElementById("logInfo").style.display = 'none';
    document.getElementById('addBTN').style.display = 'none';
    hideAdminLogo(); // Cache le logo administrateur si aucun utilisateur n'est connecté
    document.querySelectorAll(".deleteBtn").forEach((btn)=>{
      btn.style.display = 'none';
    })
  }
}

// Fonction pour afficher le logo administrateur
function showAdminLogo() {
  const adminLogo = document.createElement('button');
  adminLogo.innerHTML = '<i class="fa-solid fa-user-tie"></i>';
  adminLogo.classList.add('btn', 'btn-secondary', 'admin-logo-btn');
  adminLogo.onclick = function() {
    window.location.href = 'dashboard.html';
  };
  document.querySelector('.navlink-container').appendChild(adminLogo);
}

// Fonction pour cacher le logo administrateur
function hideAdminLogo() {
  const adminLogo = document.querySelector('.admin-logo-btn');
  if (adminLogo) {
    adminLogo.remove();
  }
}

// Appelle la fonction de vérification du rôle de l'utilisateur au chargement de la page
document.addEventListener('DOMContentLoaded', checkUserRoleAndPerformActions);

e.preventDefault();


function deleteProperty(button) {
  const card = button.closest('.card');
  card.remove();
  // Ici, vous pouvez ajouter la logique pour supprimer l'appartement côté serveur si nécessaire.
}

