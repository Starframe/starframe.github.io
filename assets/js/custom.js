// finds all expanders in navbar and opens them on page load
document.addEventListener("DOMContentLoaded", function () {

    // Only run on desktop
    if (window.innerWidth <= 768) return;
  
    // Find all navigation lists
    const navLists = document.querySelectorAll(".nav-list");
  
    navLists.forEach(list => {
        
      // Find the expander button inside this section
      const expander = list.previousElementSibling;
  
      if (expander && expander.classList.contains("nav-list-expander")) {
        // Only target top-level list
        if (list.parentElement.classList.contains("nav-list-item")) {
            // Mark it as expanded
            expander.setAttribute("aria-expanded", "true");
  
            // Show the children
            list.style.display = "block";
        }
        
      }
    });
  
  });