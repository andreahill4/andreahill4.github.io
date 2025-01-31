document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("title");
    const randomizeBtn = document.getElementById("randomize");

    // Wrap each letter in a <span> for alternating colors
    const text = title.innerText;
    title.innerHTML = text.split("").map(letter => ⁠ <span>${letter}</span> ⁠).join("");

    const letters = title.querySelectorAll("span");

    // Function to randomize colors
    function randomizeColors() {
        letters.forEach(letter => {
            const colors = ["#003366", "#d35400", "#ff6600", "#001f3f"];
            letter.style.color = colors[Math.floor(Math.random() * colors.length)];
        });
    }

    // Button Click to Change Header Colors
    randomizeBtn.addEventListener("click", randomizeColors);

    // Creative Hover Effect - Expands & Wobbles
    title.addEventListener("mouseover", () => {
        let interval = setInterval(() => {
            let x = (Math.random() - 0.5) * 8; // Random slight movement
            let y = (Math.random() - 0.5) * 8;
            title.style.transform = ⁠ translate(${x}px, ${y}px) rotate(${x}deg) scale(1.1) ⁠;
        }, 50);

        // Stop animation after 700ms
        setTimeout(() => {
            clearInterval(interval);
            title.style.transform = "scale(1)";
        }, 700);
    });

    // Reset effect if user moves mouse out of title
    title.addEventListener("mouseout", () => {
        title.style.transform = "none";
    });
});