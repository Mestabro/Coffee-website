class Coffee {
    constructor(name, description, imageLink, type) {
        this.coffeeName = name;
        this.coffeeDescription = description;
        this.coffeeImageLink = imageLink;
        this.coffeeType = type;
    }
}

function getAllCoffees() {
    coffees = [];
    coffees.push(new Coffee("Indisk Cappuccino", "good coffee", "../Images/Image_coming_soon.jpg", "Varm kaffe"));
    coffees.push(new Coffee("Karamell Macciato", "good coffee", "../Images/Image_coming_soon.jpg", "Varm kaffe"));
    coffees.push(new Coffee("test", "good coffee", "../Images/Image_coming_soon.jpg", "Iskaffe"));

    return coffees;
}


//START HERE

listOfAllCoffee = getAllCoffees();
addObjects(listOfAllCoffee);

function addObjects(listOfCoffees) {
    document.addEventListener("DOMContentLoaded", () => {


        const coffeeType = document.querySelector(".coffee-type").textContent;
        console.log(coffeeType.textContent);

        if (coffeeType) {
            const rows = document.querySelectorAll(".coffee-row");
            var added = false;
            for (const coffee of listOfAllCoffee) {
                if (coffeeType != coffee.coffeeType) continue;

                for (const row of rows) {
                    const boxes = row.querySelectorAll(".coffee-box");

                    if (boxes.length < 3) {
                        row.insertAdjacentHTML("beforeend", `
                    <div class="coffee-box">
                        <a href="${coffee.coffeeName}">
                            <img src="${coffee.coffeeImageLink}" alt="${coffee.coffeeName}">
                            <h3>${coffee.coffeeName}</h3>
                        </a>
                    </div>
                `);
                        added = true;
                        break;
                    }
                }
                if (!added) {
                    const container = document.querySelector(".container")
                    container.insertAdjacentHTML("beforeend", `
                    <div class="coffee-row">
                        <div class="coffee-box">
                            <a href="${coffee.coffeeName}">
                                <img src="${coffee.coffeeImageLink}" alt="${coffee.coffeeName}">
                                <h3>${coffee.coffeeName}</h3>
                            </a>
                        </div>
                    </div>
    
                `);

                }
            }
        }
    });
}

