import React from 'react';
import star from '../../images/icons/staricon.png';
import book from '../../images/img/book.png';
import './books.scss';

function Books() {
  return (
    <li className='books__lists'>
      <img className='book-img' src={book} alt='book' />
      <div className='book-data'>
        <p className='book__name'>«Успех или успеть»</p>
        <p className='book__author'>Алексей Гончаров</p>
      </div>
      <div className='book-star'>
        <button className='book-btn'>Посмотреть</button>
        <span>
          4<img src={star} alt='star' />
        </span>
      </div>
    </li>
  );
}

export default Books;
