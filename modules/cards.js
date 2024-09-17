// Function to generate card HTML with a dynamic link
function generateCard(title, description, imageSrc, link) {
    return `
<div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-2 d-flex justify-content-center">
    <div class="card" style="width: 100%; max-width: 19rem;">
        <img class="card-img-top" src="${imageSrc}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title text-dark">${title}</h5>
            <p class="card-text fw-light" style="color: #666;">${description}</p> 
            <a href="${link}" class="btn btn-outline-secondary" style="text-decoration: none; color: #333;">Read More</a>             
        </div>
    </div>
</div>

    `;
}


// Function to insert cards into a specific element
function displayCards(cards, containerId) {
    const cardContainer = document.getElementById(containerId); // Pass in the container ID
    if (!cardContainer) return; // Exit if container not found

    cardContainer.innerHTML = ''; // Clear any existing content

    // Loop through each card object and append it to the container
    cards.forEach(card => {
        cardContainer.innerHTML += generateCard(card.title, card.description, card.imageSrc, card.link);
    });
}

// Sample data for different sections (you can replace these)
const homebookCards = [
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.aa.jpg", link:"/arts&architecture.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.aa.jpg", link:"/arts&architecture.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.aa.jpg", link:"/arts&architecture.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.aa.jpg", link:"/arts&architecture.html" },

];

const homeblogCards = [
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.blog.jpg", link:"/blog.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.blog.jpg", link:"/blog.html"  },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.blog.jpg", link:"/blog.html"  },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.blog.jpg", link:"/blog.html"  },

];

// Define bookCards
const aaCards = [
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.aa.jpg", link:"/arts&architecture.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/2.aa.jpg", link:"/arts&architecture.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.aa.jpg", link:"/arts&architecture.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/2.aa.jpg", link:"/arts&architecture.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.aa.jpg", link:"/arts&architecture.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/2.aa.jpg", link:"/arts&architecture.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.aa.jpg", link:"/arts&architecture.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/2.aa.jpg", link:"/arts&architecture.html" },
    // Add more book cards as needed
];

const bmsCards = [
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.bb.jpg", link:"/body,mind&spirit.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/2.bb.jpg", link:"/body,mind&spirit.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.bb.jpg", link:"/body,mind&spirit.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/2.bb.jpg", link:"/body,mind&spirit.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.bb.jpg", link:"/body,mind&spirit.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/2.bb.jpg", link:"/body,mind&spirit.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/1.bb.jpg", link:"/body,mind&spirit.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/2.bb.jpg", link:"/body,mind&spirit.html" },
    // Add more book cards as needed
];

const bCards = [
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/3.b.jpg", link:"/business.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/3.bb.jpg", link:"/business.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/3.b.jpg", link:"/business.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/3.bb.jpg", link:"/business.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/3.b.jpg", link:"/business.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/3.bb.jpg", link:"/business.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/3.b.jpg", link:"/business.html" },
    { title: "Lorem Ipsum", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", imageSrc: "/assets/images/3.bb.jpg", link:"/business.html" },
    // Add more book cards as needed
];


// Define blogCards specifically for blog.html
const blogCards = [
    { title: "Benefits of Having a Digital Library", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imageSrc: "/assets/images/1.blog.jpg" },
    { title: "Benefits of Having a Digital Library", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imageSrc: "/assets/images/1.blog.jpg" },
    { title: "Benefits of Having a Digital Library", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imageSrc: "/assets/images/1.blog.jpg" },
    { title: "Benefits of Having a Digital Library", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imageSrc: "/assets/images/1.blog.jpg" },
    { title: "Benefits of Having a Digital Library", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imageSrc: "/assets/images/1.blog.jpg" },
    { title: "Benefits of Having a Digital Library", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imageSrc: "/assets/images/1.blog.jpg" },
    { title: "Benefits of Having a Digital Library", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imageSrc: "/assets/images/1.blog.jpg" },
    { title: "Benefits of Having a Digital Library", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", imageSrc: "/assets/images/1.blog.jpg" },
    // Add more blog cards as needed
];

// Similarly, you can have arrays for other pages if necessary
