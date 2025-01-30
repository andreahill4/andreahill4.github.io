document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("title");
    const text = title.innerText;

    // Wrap each letter in a <span> for individual animation
    title.innerHTML = text.split("").map(letter => "<span>" + letter + "</span>").join("");

    const letters = title.querySelectorAll("span");

    title.addEventListener("mouseover", () => {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.transform = "scale(1.5)";
                letter.style.margin = "0 5px";
            }, index * 50);
        });
    });

    title.addEventListener("mouseout", () => {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.style.transform = "scale(1)";
                letter.style.margin = "0 2px";
            }, index * 50);
        });
    });

    // User Controls
    const fontSizeSlider = document.getElementById("fontSize");
    const textColorInput = document.getElementById("textColor");
    const resetButton = document.getElementById("reset");
    const article = document.querySelector("article");

    fontSizeSlider.addEventListener("input", function () {
        article.style.fontSize = fontSizeSlider.value + "px";
    });

    textColorInput.addEventListener("input", function () {
        article.style.color = textColorInput.value;
    });

    resetButton.addEventListener("click", function () {
        article.style.fontSize = "18px";
        article.style.color = "#ffffff";
        fontSizeSlider.value = "18";
        textColorInput.value = "#ffffff";
    });
});