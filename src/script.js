const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
const paragraphs = document.querySelectorAll("form p");
const span = document.querySelectorAll("span");

function age(e) {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  const date = new Date();

  let day2 = date.getDate();
  let month2 = date.getMonth() + 1;
  let year2 = date.getFullYear();
  const monthList = [30, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];

  inputs.forEach((input) => {
    // Check if the input empty
    if (input.value === "") {
      labels.forEach((label) => {
        label.style.color = "hsl(0, 100%, 67%)";
      });
      input.style.borderColor = "hsl(0, 100%, 67%)";
      paragraphs.forEach((paragraph) => {
        paragraph.innerText = "This field is required";
        paragraph.style.color = "hsl(0, 100%, 67%)";
      });
    } else {
      if (day > day2) {
        day2 += monthList[month2 - 1];
        month2 -= 1;
      } else if (month > month2) {
        month2 += 12;
        year2 -= 1;
      }

      labels.forEach((label) => {
        label.style.color = "hsl(0, 1%, 44%)";
      });
      input.style.borderColor = "hsl(0, 1%, 44%)";
      paragraphs.forEach((paragraph) => {
        paragraph.innerText = "";
        paragraph.style.color = "hsl(0, 100%, 67%)";
      });

      span[0].innerText = year2 - year;
      span[1].innerText = month2 - month;
      span[2].innerText = day2 - day;
    }
  });
}
// Move between inputs by arrow keys
function keyArrows() {
  inputs[0].focus();
  inputs.forEach((input) => {
    const nextInput = inputs[inputs + 1];
    if (nextInput) nextInput.focus();

    input.addEventListener("keydown", function (event) {
      const currentInput = Array.from(inputs).indexOf(event.target);
      if (event.key === "ArrowRight") {
        const nextIndex = currentInput + 1;
        if (nextIndex < inputs.length) inputs[nextIndex].focus();
      }
      if (event.key === "ArrowLeft") {
        const previousInput = currentInput - 1;
        if (previousInput < inputs.length) inputs[previousInput].focus();
      }
    });
  });
}

window.onload = function () {
  keyArrows();
};
