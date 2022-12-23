import React from 'react';
import Books from '../Books';
import next from '../../../images/icons/nextslider.png';
import back from '../../../images/icons/backslider.png';
import './topbooks.scss';

function TopBooks() {
  const arr = [1, 2, 3, 4, 5]; // git push --set-upstream origin (текущая ветка)
  return (
    <div className='books'>
      <h2 className='books__title'>Топ книги</h2>
      <ul className='books__items'>{arr.length && arr.map((item) => <Books key={item} />)}</ul>
      <img src={next} alt='next' className='next' />
      <img src={back} alt='back' className='back' />
    </div>
  );
}

export default TopBooks;
