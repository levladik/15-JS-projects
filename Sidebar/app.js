const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

sidebarBtn.addEventListener("click", function() {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function() {
  sidebar.classList.toggle("show-sidebar");
});
