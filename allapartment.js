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


document.addEventListener('DOMContentLoaded', function() {
    const menuBar = document.getElementById("menu-bar");
    const mobileNavItems = document.querySelector(".mobile-nav-items");
    const closeBar = document.getElementById("close-btn");

    menuBar.addEventListener("click", () => {
        if (mobileNavItems.style.display === "none" || mobileNavItems.style.display === "") {
            mobileNavItems.style.display = "flex";
        }
    });

    closeBar.addEventListener("click", () => {
        if (mobileNavItems.style.display === "flex") {
            mobileNavItems.style.display = "none";
        }
    });

    const whatsappBtn = document.querySelector('.whatsapp-btn');
    const emailBtn = document.querySelector('.email-btn');
    const callBtn = document.querySelector('.call-btn');

    whatsappBtn.addEventListener('click', function() {
        const url = whatsappBtn.getAttribute('data-url');
        const phoneNumber = '+221787127069';
        const message = `Salut, je suis intéressé par votre publication ${url}`;
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    });

    emailBtn.addEventListener('click', function() {
        const url = emailBtn.getAttribute('data-url');
        const recipient = 'akeita476@gmail.com';
        const subject = 'Demande d\'informations sur l\'appartement';
        const body = `Bonjour,

Je suis intéressé par votre appartement publié sur votre site web. Voici le lien vers l'annonce : ${url}

Pourriez-vous me fournir plus d'informations sur cet appartement, s'il vous plaît ?

Cordialement,
[Votre Nom]`;
        window.open(`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    });

    callBtn.addEventListener('click', function() {
        const url = callBtn.getAttribute('data-url');
        alert(`Veuillez appeler le numéro suivant pour plus d'informations sur cet appartement : +221 33 123 4567.\n\nLien de l'appartement : ${url}`);
    });
});
