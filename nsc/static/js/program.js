const buttons = document.querySelectorAll(".program");
const content = document.getElementById("program-content");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const program = programsData[btn.dataset.program];
        if (!program) return;

        content.innerHTML = `
            <h2 id="program-title">${program.title}</h2>

            <div class="program-description">
                <div class="program-section reverse">
                    <div class="program-text">${program.description}</div>
                    <div class="program-image">
                        <img src="${program.image}" alt="${program.title}">
                    </div>
                </div>
            </div>

            <div class="learn-more" onclick="window.location.href='${program.link}'">
                Learn More →
            </div>
        `;
    });
});
