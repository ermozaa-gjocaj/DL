export function getNavbar(div) {
    let compose_html = `
        <div class="container-fluid">
            <a class="navbar-brand" href="home.html">Digital-Library</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="home.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="books.html">Books</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="blog.html">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </div>`;
    document.getElementById(div).innerHTML = compose_html;
}


export function getFooter(div) {
    let compose_html = `
    <div class="main-footer widgets-dark typo-light">
        <div class="container">
        <div class="row">
        <div class="col-sm-6">
            <div class="widget subscribe no-box">
                <h5 class="widget-title">Digital Library<span></span></h5>
                <p class="p1">About the company, a brief description will go here...</p>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="widget no-box">
                <h5 class="widget-title">Contact Us<span></span></h5>
                <p><a href="mailto:info@domain.com" title="con">info@domain.com</a></p>
            </div>
        </div>
        </div>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <p>Copyright Digital Library © 2022. All rights reserved.</p>
            </div>
        </div>
        </div>
    </div>`;
    document.getElementById(div).innerHTML = compose_html;
}
