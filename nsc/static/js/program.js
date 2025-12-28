const buttons = document.querySelectorAll(".program");
const content = document.querySelector(".program-content"); // fixed selector

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const program = programsData[btn.dataset.program];
        if (!program) return;

        content.innerHTML = `
            <h2 id="program-title">${program.title}</h2>

            <div class="program-description">
                <div class="program-section flex-row">
                    <div class="program-image">
                        <img src="${program.image1}" alt="${program.title}">
                    </div>

                    <div class="program-text">
                        <div class="info-item"><span class="label">What?</span> ${program.what}</div>
                        <div class="info-item"><span class="label">How?</span> ${program.how}</div>
                        <div class="info-item"><span class="label">Why?</span> ${program.why}</div>
                    </div>
                </div>

                <div class="program-section reverse">
                    <div class="program-text">${program.description}</div>
                    <div class="program-image">
                        <img src="${program.image2}" alt="${program.title}">
                    </div>
                </div>
            </div>

            <div class="learn-more" onclick="window.location.href='${program.link}'">
                Learn More →
            </div>
        `;
    });
});
