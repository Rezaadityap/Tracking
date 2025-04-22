// Script kelas aktif
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("bg-secondary", "border-white");
    }
  });
});

// Script untuk tanggal
document.getElementById("tanggal").textContent = new Date().toLocaleDateString(
  "id-ID",
  {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
);

// Toggle menu untuk mobile
const menuBtn = document.getElementById("menu-btn");
const closeMenu = document.getElementById("close-menu");
const sidebarMenu = document.getElementById("sidebar-menu");

menuBtn.addEventListener("click", () => {
  sidebarMenu.classList.remove("translate-x-full");
});

closeMenu.addEventListener("click", () => {
  sidebarMenu.classList.add("translate-x-full");
});

// Ambil elemen tombol
const backToTopButton = document.getElementById("backToTop");

// Fungsi untuk menampilkan tombol saat scroll ke bawah
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    // Muncul setelah scroll 300px
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

// Fungsi untuk smooth scroll ke atas
backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
