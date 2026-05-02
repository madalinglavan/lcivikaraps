
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

// CLICK BURGER
toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.toggle("open");
  toggle.classList.toggle("active"); // 🔥 asta face animația
});

// CLICK LINK → închide + reset burger
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.classList.remove("active");
  });
});

// CLICK OUTSIDE
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove("open");
    toggle.classList.remove("active");
  }
});
// ESC KEY (extra premium)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    nav.classList.remove("open");
  }
});



// JOB FORM → WHATSAPP
document.getElementById("jobForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("jobName").value;
  const phone = document.getElementById("jobPhone").value;
  const job = document.getElementById("jobType").value;

  const message = `Hello! I am interested in a job in Denmark.

Name: ${name}
Phone: ${phone}
Preferred Job: ${job}`;

  const url = `https://wa.me/4550225223?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});


// COMPANY FORM → WHATSAPP
document.getElementById("companyForm").addEventListener("submit", function(e){
  e.preventDefault();

  const company = document.getElementById("companyName").value;
  const phone = document.getElementById("companyPhone").value;
  const need = document.getElementById("companyNeed").value;

  const message = `Hello! I represent a company in Denmark.

Company: ${company}
Phone: ${phone}
Workers needed: ${need}`;

  const url = `https://wa.me/4550225223?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // offset pentru navbar
        behavior: "smooth"
      });
    }
  });
});


window.addEventListener("scroll", () => {
  document.querySelector(".header")
    .classList.toggle("scrolled", window.scrollY > 10);
});


function setLang(lang) {
  localStorage.setItem("lang_selected", lang);
}

