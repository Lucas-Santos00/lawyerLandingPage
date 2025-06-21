window.addEventListener("scroll", (function() {
    window.scrollY > 0 ? document.body.style.backgroundColor = "#0D0D0D" : document.body.style.backgroundColor = "#1A1A1A"
}));
const slides = document.getElementById("slides"),
    pagination = document.getElementById("pagination"),
    testimonials = document.querySelectorAll(".testimonial");
let currentPage = 0,
    itemsPerPage = 1,
    totalPages = 0;

function detectItemsPerPage() {
    const e = window.innerWidth;
    return e >= 1024 ? 3 : e >= 768 ? 2 : 1
}

function updateCarousel() {
    itemsPerPage = detectItemsPerPage(), totalPages = Math.ceil(testimonials.length / itemsPerPage), renderPagination(), goToPage(0)
}

function renderPagination(){
  pagination.innerHTML = "";
  for(let e=0; e<totalPages; e++){
    const t = document.createElement("button");
    t.className = "dot";

    // Criar span sr-only
    const srText = document.createElement("span");
    srText.className = "sr-only";
    srText.textContent = `Ir para o slide ${e + 1}`;
    
    // Inserir span no botão
    t.appendChild(srText);

    t.addEventListener("click", () => goToPage(e));
    pagination.appendChild(t);
  }
  updateDots();
}


function goToPage(e) {
    currentPage = e;
    const t = e * (100 / itemsPerPage);
    slides.style.transform = `translateX(-${t}%)`, updateDots()
}

function updateDots() {
    document.querySelectorAll(".dot").forEach(((e, t) => {
        e.classList.toggle("active", t === currentPage)
    }))
}
window.addEventListener("resize", updateCarousel), window.addEventListener("DOMContentLoaded", updateCarousel);
const FAQList = document.getElementsByClassName("FAQItem");
Array.from(FAQList).forEach((e => {
    e.addEventListener("click", (() => {
        toggleFAQ(e)
    }))
}));
const toggleFAQ = e => {
    "Opened" !== e.id ? (Array.from(FAQList).forEach((e => {
        e.id = ""
    })), e.id = "Opened") : e.id = ""
};