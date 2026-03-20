// finds all expanders in navbar and opens them on page load
document.addEventListener("DOMContentLoaded", function () {

    // Only run on desktop
    if (window.innerWidth <= 768) return;
  
    // Find all top-level nav bar entries
    const navLists = document.querySelectorAll(".nav-list > .nav-list-item > .nav-list");
  
    navLists.forEach(list => {
      
      // Find the expander button inside this section
      const expander = list.parentElement.querySelector(".nav-list-expander");
  
      if (expander) {
        // mark as expanded
        expander.setAttribute("aria-expanded", "true");
        list.style.display = "block";
        console.log("Valid button found");
      } else {
        console.log("No valid button found");
      }
      
    });
  
  });