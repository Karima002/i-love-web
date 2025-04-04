document.addEventListener("DOMContentLoaded", function () {
    const options = {
        threshold: 0.4 // 40% van het element moet zichtbaar zijn voordat het triggert
    };
  
    // IMAGE ANIMATION
  
    let revealCallback = (entries) => {
      entries.forEach((entry) => {
        let container = entry.target;
  
        if (entry.isIntersecting) { // Controleer of het element zichtbaar is in de viewport
          console.log(container); // Log het element naar de console
          container.classList.add("animating"); //Class toevoegen
          return;  // Stop verdere verwerking
        }
  
        if (entry.boundingClientRect.top > 0) {
          container.classList.remove("animating"); // Class verwijderen
        }
      });
    };
  
    let revealObserver = new IntersectionObserver(revealCallback, options);
  
    document.querySelectorAll(".reveal").forEach((reveal) => { //    // Selecteer alle elementen met de class "reveal"
      revealObserver.observe(reveal); // Observeer elk element
    });

});
  
  