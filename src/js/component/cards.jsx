import React from "react";

const Cards = (props) =>{
    return (
<div class="row d-flex">
  <div class="col-3">
    <div class="card text-center">
    <img src={props.imageURL1}/>
      <div class="card-body">
        <h5 class="card-title">{props.cardsTitle}</h5>
        <p class="card-text">{props.cardText}</p>
        </div>
      <div class="card-footer">
        <a href="#" class="btn btn-primary">{props.buttonCardsURL}</a>
      </div>
    </div>
  </div>
  <div class="col-3">
    <div class="card text-center">
    <img src={props.imageURL2}/>
      <div class="card-body">
        <h5 class="card-title">{props.cardsTitle}</h5>
        <p class="card-text">{props.cardText}</p>
        </div>
      <div class="card-footer">
        <a href="#" class="btn btn-primary">{props.buttonCardsURL}</a>
      </div>
    </div>
  </div>
  <div class="col-3">
    <div class="card text-center">
    <img src={props.imageURL3} alt="..."/>

      <div class="card-body">
        <h5 class="card-title">{props.cardsTitle}</h5>
        <p class="card-text">{props.cardText}</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-primary">{props.buttonCardsURL}</a>
      </div>
    </div>
  </div>
  <div class="col-3">
    <div class="card text-center">
    <img src={props.imageURL4} alt="..."/>

      <div class="card-body">
        <h5 class="card-title">{props.cardsTitle}</h5>
        <p class="card-text">{props.cardText}</p>
      </div>
      <div class="card-footer">
        <a href="#" class="btn btn-primary">{props.buttonCardsURL}</a>
      </div>
        
      
    </div>
  </div>
</div>            
    )
}

export default Cards;