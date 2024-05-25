const menu = [
    {
        id: 1,
        title: "Butter Pancakes",
        price: 15.99,
        img: "./images/item-1.jpeg",
        category: "breakfast",
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
        id: 2,
        title: "Dinner Double",
        price: 13.99,
        img: "./images/item-2.jpeg",
        category: "dinner",
        desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },
    {
        id: 3,
        title: "Godzilla Milkshake",
        price: 6.99,
        img: "./images/item-3.jpeg",
        category: "breakfast",
        desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
        id: 4,
        title: "Country Delight",
        price: 20.99,
        img: "./images/item-4.jpeg",
        category: "lunch",
        desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"
    },
    {
        id: 5,
        title: "Egg Attack",
        price: 22.99,
        img: "./images/item-5.jpeg",
        category: "breakfast",
        desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
    },
    {
        id: 6,
        title: "Oreo Dream",
        price: 18.99,
        img: "./images/item-6.jpeg",
        category: "snacks",
        desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    },
    {
        id: 7,
        title: "Bacon Overflow",
        price: 8.99,
        img: "./images/item-7.jpeg",
        category: "lunch",
        desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
    },
    {
        id: 8,
        title: "American Classic",
        price: 12.99,
        img: "./images/item-8.jpeg",
        category: "lunch",
        desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    },
    {
        id: 9,
        title: "Quarantine Buddy",
        price: 16.99,
        img: "./images/item-9.jpeg",
        category: "snacks",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },
    {
        id: 10,
        title: "Steak Dinner",
        price: 39.99,
        img: "./images/item-10.jpeg",
        category: "dinner",
        desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },
]

const section = document.querySelector(".main-container");
const buttons = document.querySelectorAll(".btn");

window.addEventListener("DOMContentLoaded", () => {
    displayMenuItems(menu);
});

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const category = e.currentTarget.classList.contains("all") ? "" : e.currentTarget.classList[1];
        const menuCategory = menu.filter((menuItem) => {
            if (category === "" || menuItem.category === category) {
                // console.log(menuItem)  
                return menuItem;
            }
        });
        displayMenuItems(menuCategory);
    });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `<div class="first-container">
                   <img class="image" src=${item.img} alt=${item.title}>
                   <div class="paragraph">
                       <div class="food-heading">
                            <h2 class="heading1">${item.title}</h2>
                            <p class="rating">$${item.price}</p>
                        </div>
                        <p class="para1">
                            ${item.desc}
                        </p>
                    </div>
                </div>`;
    });
    displayMenu = displayMenu.join(" ");
    section.innerHTML = displayMenu;
} 