let left = document.querySelector(".fa-angle-left");
let right = document.querySelector(".fa-angle-right");
let imageElement = document.querySelector(".images");
let heading1 = document.querySelector(".heading1");
let heading2 = document.querySelector(".heading2");
let description = document.querySelector(".description");

let reviews = [
    {
        name: "Susan Smith",
        profession: "Web Developer",
        image: "images/images-1.jpeg",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ratione 
        laborum modi nemo perferendis? Accusamus, eaque totam nobis voluptatum ad cumque
         quas soluta neque nemo dolorum? Ratione odio quisquam nostrum!`
    },
    {
        name: "Lorem Ipsum",
        profession: "Software Engineer",
        image: "images/images-2.jpg",
        description: `Dolor sit amet consectetur adipisicing elit. Voluptatem, minima. Reprehenderit molestiae cum libero atque ut voluptate qui consectetur aliquid incidunt voluptatem.`
    },
    {
        name: "Kartik Aryan",
        profession: "Actor",
        image: "images/images-3.jpg",
        description: `Accusamus, eaque totam nobis voluptatum ad cumque quas soluta neque nemo dolorum.
        Dolor sit amet consectetur adipisicing elit. Voluptatem, minima.`
    },
    {
        name: "Peter Jones",
        profession: "Teacher",
        image: "images/images-4.webp",
        description: `Reprehenderit molestiae cum libero atque ut voluptate qui consectetur aliquid incidunt voluptatem.
        Dolor sit amet consectetur adipisicing elit. Voluptatem, minima.`
    },
];

let currentReview = 0;

const updateReview = () => {
    let review = reviews[currentReview];
    console.log(review)
    imageElement.src = review.image;
    heading1.innerHTML = review.name;
    heading2.innerHTML = review.profession;
    description.innerHTML = review.description;
};

right.addEventListener("click", () => {
    currentReview = (currentReview + 1) % reviews.length;
    updateReview();
});

left.addEventListener("click", () => {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    updateReview();
});
