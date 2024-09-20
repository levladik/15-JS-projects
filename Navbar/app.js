const toggleBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

toggleBtn.addEventListener("click", function() {
  const styles = links.classList;
  if (styles.contains("show-links")) {
    styles.remove("show-links")
  } else {
    styles.add("show-links");
  }
})
