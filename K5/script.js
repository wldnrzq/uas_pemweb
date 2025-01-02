document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for navigation links
    const menuLinks = document.querySelectorAll(".menu");
    menuLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 55,
            behavior: "smooth",
          });
        }
      });
    });
  
    // Pop-up modal for menu images
    const menuImages = document.querySelectorAll(".menu-kiri img");
    const modal = document.createElement("div");
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-40%, -40%)";
    modal.style.backgroundColor = "#fff";
    modal.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    modal.style.padding = "20px";
    modal.style.zIndex = "1000";
    modal.style.borderRadius = "10px";
    document.body.appendChild(modal);
  
    menuImages.forEach(image => {
      image.addEventListener("click", () => {
        modal.innerHTML = `<img src="${image.src}" alt="${image.alt}" style="max-width: 100%; height: auto;">
                           <p style="margin-top: 10px; text-align: center;">${image.alt}</p>
                           <button style="margin-top: 10px; padding: 10px; background-color: brown; color: white; border: none; border-radius: 5px;">Close</button>`;
        modal.style.display = "block";
      });
    });
  
    modal.addEventListener("click", e => {
      if (e.target.tagName === "BUTTON") {
        modal.style.display = "none";
      }
    });
  
    // Scroll animation for sections
    const sections = document.querySelectorAll("div[class^='section-']");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
  
    sections.forEach(section => {
      section.style.opacity = "0";
      section.style.transform = "translateY(100px)";
      section.style.transition = "all 0.7s ease";
      observer.observe(section);
    });
  });
  