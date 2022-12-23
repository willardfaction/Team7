import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookCard.css'


const BookCard = ({obj}) => {
    return (
        <div className="product__item">
        <div className="product__img">
          <img className="product__im" src = {obj.image_url}  alt="product-img"/>
        </div>
    
        <div className="product__content">
          <h5>
            {obj.name}
          </h5>
          <div className=" d-flex align-items-center justify-content-between ">
            <span className="product__price">{obj.author}</span>
            <button className="addTOCart__btn"> Посмотреть
            </button>
          </div>
        </div>
      </div>
    );
}

export default BookCard;