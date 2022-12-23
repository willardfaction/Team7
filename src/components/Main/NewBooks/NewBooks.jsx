import React from 'react';
import Books from '../Books';
import './newbooks.scss';

function NewBooks() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className='books'>
      <h2 className='books__title'>Новинки</h2>
      <ul className='books__items'>{arr.length && arr.map((item) => <Books key={item} />)}</ul>
    </div>
  );
}

export default NewBooks;
