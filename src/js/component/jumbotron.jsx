import React from "react";

const Jumbotron = (props) =>{
    return (
        <div class="card bg-light mb-4 border-0 pb-5">
            <div class="card-body">
                <h1 class="card-title fs-1">{props.title}</h1>
                <p class="card-text">{props.textJumbotron}</p>
                <a href="#" class="btn btn-primary">{props.buttonURL}</a>
            </div>
        </div>
    )
}





export default Jumbotron;
