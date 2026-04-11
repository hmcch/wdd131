document.addEventListener("DOMContentLoaded", () => {
    const lessonsGrid = document.querySelector(".grid-container");
    const yearSpan = document.querySelector("#year");
    const modifiedSpan = document.querySelector("#lastModified");
    const visitDisplay = document.querySelector("#visitCount");

    const programs = [
        { id: "01", title: "Early Explorers", ages: "Ages 5 - 6", desc: "Focusing on rhythm games and finger numbers.", level: "Beginner" },
        { id: "02", title: "Young Pianists", ages: "Ages 7 - 11", desc: "Comprehensive technique and theory.", level: "Intermediate" },
        { id: "03", title: "Teen Intensive", ages: "Ages 12 - 17", desc: "Accelerated learning and repertoire.", level: "Advanced" },
        { id: "04", title: "Adult & Leisure", ages: "Ages 18+", desc: "Flexible curriculum for busy adults.", level: "Leisure" }
    ];

    if (lessonsGrid) {
        programs.forEach(item => {
            const statusClass = item.level === "Advanced" ? "lesson-card active" : "lesson-card";
            lessonsGrid.insertAdjacentHTML("beforeend", `
                <div class="${statusClass}">
                    <div class="card-icon" style="font-family: 'Playfair Display'; font-size: 2.5rem; color: #C5A059;">${item.id}</div>
                    <h3>${item.title}</h3>
                    <p><strong>${item.ages}</strong></p>
                    <p><em>Level: ${item.level}</em></p>
                    <p>${item.desc}</p>
                </div>`);
        });
    }

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (modifiedSpan) modifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

    if (visitDisplay) {
        let visits = Number(window.localStorage.getItem("tk-studio-visits")) || 0;
        visitDisplay.textContent = visits === 0 ? "Welcome! First visit. 🎵" : `Studio Visits: ${visits}`;
        window.localStorage.setItem("tk-studio-visits", visits + 1);
    }
});