// ==========================================
// ROBLOX TRENDING WEBSITE
// ==========================================


// ==========================================
// SEARCH
// ==========================================

const searchInput = document.querySelector(".search input");
const gameCards = document.querySelectorAll(".game-card");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value.toLowerCase().trim();

        gameCards.forEach(card => {

            const gameName =
                card.querySelector("h3").textContent.toLowerCase();

            if (gameName.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}


// ==========================================
// GAME CARDS
// ==========================================

gameCards.forEach(card => {

    card.addEventListener("click", function () {

        const gameName =
            card.querySelector("h3").textContent.trim();

        if (gameName === "Steal a Brainrot") {

            window.location.href = "game.html";

        } else if (gameName === "Steal an Egg") {

            window.location.href = "egg.html";

        } else {

            alert(
                "🎮 " + gameName +
                "\n\nGame page coming soon!"
            );

        }

    });

});


// ==========================================
// EXPLORE GAME BUTTON
// ==========================================

const exploreButton =
    document.querySelector(".explore-btn");

if (exploreButton) {

    exploreButton.addEventListener("click", function () {

        window.location.href = "game.html";

    });

}


// ==========================================
// VIEW ALL BUTTON
// ==========================================

const viewAllButton =
    document.querySelector(".section-title button");

if (viewAllButton) {

    viewAllButton.addEventListener("click", function () {

        alert(
            "🔥 More trending Roblox games will be added here!"
        );

    });

}


// ==========================================
// NAVIGATION
// ==========================================

const navLinks =
    document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const section =
            link.textContent.trim();

        alert(
            section +
            " section coming soon!"
        );

    });

});


// ==========================================
// EGG DATABASE SEARCH
// ==========================================

const eggSearch =
    document.getElementById("eggSearch");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const eggEntries =
    document.querySelectorAll(".egg-entry");

let currentFilter = "all";


function filterEggs() {

    if (!eggSearch) {
        return;
    }

    const searchText =
        eggSearch.value.toLowerCase().trim();

    eggEntries.forEach(entry => {

        const entryText =
            entry.textContent.toLowerCase();

        const matchesSearch =
            entryText.includes(searchText);

        const matchesFilter =
            currentFilter === "all" ||
            entryText.includes(
                currentFilter.toLowerCase()
            );

        if (matchesSearch && matchesFilter) {

            entry.style.display = "flex";

        } else {

            entry.style.display = "none";

        }

    });

}


// Search box
if (eggSearch) {

    eggSearch.addEventListener(
        "input",
        filterEggs
    );

}


// Rarity buttons
filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        currentFilter =
            this.dataset.filter;

        filterEggs();

    });

});


// ==========================================
// PET RARITY SORTING
// ==========================================

const raritySort =
    document.getElementById("raritySort");


const rarityOrder = {

    common: 1,
    uncommon: 2,
    rare: 3,
    epic: 4,
    legendary: 5,
    mythic: 6,
    cosmic: 7,
    secret: 8,
    eternal: 9,
    divine: 10

};


if (raritySort) {

    raritySort.addEventListener(
        "change",
        function () {

            const petTables =
                document.querySelectorAll(
                    ".pet-table"
                );


            petTables.forEach(table => {

                const rows =
                    Array.from(
                        table.querySelectorAll(
                            ".pet-row"
                        )
                    );


                // DEFAULT
                if (this.value === "default") {

                    return;

                }


                // SORT PETS
                rows.sort((a, b) => {

                    // Second column = rarity
                    const rarityA =
                        a.children[1]
                            .textContent
                            .trim()
                            .toLowerCase();

                    const rarityB =
                        b.children[1]
                            .textContent
                            .trim()
                            .toLowerCase();


                    const valueA =
                        rarityOrder[rarityA] || 0;

                    const valueB =
                        rarityOrder[rarityB] || 0;


                    // RAREST → COMMON
                    if (
                        this.value === "rarest"
                    ) {

                        return valueB - valueA;

                    }


                    // COMMON → RAREST
                    if (
                        this.value === "common"
                    ) {

                        return valueA - valueB;

                    }


                    return 0;

                });


                // Put sorted rows back
                rows.forEach(row => {

                    table.appendChild(row);

                });

            });

        }
    );

}