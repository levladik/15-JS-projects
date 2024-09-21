const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("reset")) {
      count = 0;
    } else if (styles.contains("increase")) {
      count++;
    }
    value.textContent = count;

    if (count < 0) {
      value.style.color = "tomato";
    } else if (count > 0) {
      value.style.color = "lightgreen";
    } else {
      value.style.color = "hsl(209, 61%, 16%)";
    }
  });
});
