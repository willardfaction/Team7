import React, { useEffect } from 'react';
import Books from '../Books';
import next from '../../../images/icons/nextslider.png';
import back from '../../../images/icons/backslider.png';
import './topbooks.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../../redux/reducer/addBooks';

function TopBooks() {
  const dispatch = useDispatch();
  const dataBooks = useSelector((state) => state.books.books);
  console.log(dataBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const arr = [1, 2, 3, 4, 5];
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
