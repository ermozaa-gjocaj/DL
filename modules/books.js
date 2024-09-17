// card.js (books.js if renamed)
export function getBooks(containerId) {
    const books = [
        {
            imgSrc: "/assets/images/1.aa.jpg",
            title: "Arts & Architecture",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            link: "/arts&architecture.html"
        },
        {
            imgSrc: "/assets/images/1.bb.jpg",
            title: "Body, Mind & Spirit",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            link: "/body,mind&spirit.html"
        },
        {
            imgSrc: "/assets/images/3.b.jpg",
            title: "Business",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            link: "/business.html"
        },
        {
            imgSrc: "/assets/images/4.b.jpg",
            title: "Children's",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            link: "#"
        },
        {
            imgSrc: "/assets/images/5.b.jpg",
            title: "Computer and Tech",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            link: "#"
        },
        {
            imgSrc: "/assets/images/6.b.jpg",
            title: "Sports & Reacreation",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            link: "#"
        },
        {
            imgSrc: "/assets/images/7.b.jpg",
            title: "Travel",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            link: "#"
        }
    ];

    const container = document.getElementById(containerId);

    books.forEach((book, index) => {
        // Generate a unique ID for the timestamp
        const timestampId = `timestamp-${index}`;

        const card = `
            <div class="mb-4">
                <div class="card">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src="${book.imgSrc}" class="card-img img-fluid" alt="Responsive image">
                        </div>
                        <div class="col-md-7 text-dark">
                            <div class="card-body">
                                <h5 class="card-title text-center mt-2"><a href="${book.link}" style="text-decoration: none; color: #333;">${book.title}</a></h5>
                                <hr class="border-2" style="width:400px; margin: auto;">
                                <br>
                                <p class="card-text fw-light">${book.description}</p>
                                <br>
                                <p class="card-text text-end"><small class="text-muted" id="${timestampId}">Last updated 0 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Append the card to the container
        container.innerHTML += card;

        // Set up an interval to update the "Last updated" text every minute
        let minutesAgo = 0;
        setInterval(() => {
            minutesAgo++;
            const timestampElement = document.getElementById(timestampId);
            if (timestampElement) {
                timestampElement.textContent = `Last updated ${minutesAgo} mins ago`;
            }
        }, 60000); // 60000 milliseconds = 1 minute
    });
}
