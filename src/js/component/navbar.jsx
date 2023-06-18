import React from "react";

const Navbar = (props) =>{
    return (
        <nav class="navbar navbar-expand-lg bg-secondary">
            <div class="container-fluid ">
                <a class="navbar-brand text-white" href="#">{props.logo}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse justify-content-end pr-2" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="#">{props.home}</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white-50" href="#">{props.about}</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white-50" href="#">{props.services}</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link text-white-50">{props.contact}</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar; 