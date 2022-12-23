import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../../redux/reducer/addBooks';
import Books from '../Books';
import './newbooks.scss';

function NewBooks() {
  const dispatch = useDispatch();
  const dataBooks = useSelector((state) => state.books.books);
  console.log(dataBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className='books'>
      <h2 className='books__title'>Новинки</h2>
      <ul className='books__items'>
        {dataBooks.length && dataBooks.map((item) => <Books key={item.id} />)}
      </ul>
    </div>
  );
}

export default NewBooks;
