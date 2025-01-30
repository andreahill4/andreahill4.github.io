document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("title");

    title.addEventListener("mouseover", () => {
        let interval = setInterval(() => {
            let x = (Math.random() - 0.5) * 10; // Random small movement
            let y = (Math.random() - 0.5) * 10;
            title.style.transform = translate($,{x},px, $,{y},px) ;rotate($,{x},deg);
        }, 50);

        // Stop shaking after 500ms
        setTimeout(() => {
            clearInterval(interval);
            title.style.transform = "none";
        }, 500);
    });

    // Extra: Reset effect if user moves mouse out of title
    title.addEventListener("mouseout", () => {
        title.style.transform = "none";
    });
});