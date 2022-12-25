import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/BookList.css';
import star from '../img/star.png';
import book from '../img/book.png';
import person from '../img/person.png'
import editprof from '../img/editprof.png'
import timehistory from '../img/timehistory.png'

const BookList = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className='title-my-book' onClick={() => navigate("/person")}>Мои книги</h2>
      <h2 className='title-save'>Сохраненные</h2>
      <div className='my-book'>
      <a className='download-book' href="/downbook">+Загрузить книгу</a>
      <div className='card-book1'>
         <div className='card-top'>
          <img src={book} alt='book'/>
          <h1 style={{marginTop: '7%'}}>"Успех или успеть"</h1>
          <p style={{display: 'flex', justifyContent: 'center', fontSize: '13px', bottom: '12px', position: 'relative'}}>Алексей Гончаров</p>
         </div>
        <div className='card-bottom'>
          <p className='number'>4</p>
          <img src={star} alt={star} className="star"/>
          <button className='btn-read' onClick={() => navigate("/detail")}>Посмотреть</button>
        </div>
      </div>

      <div className='card-book2'>
         <div className='card-top'>
          <img src={book} alt='book'/>
          <h1 style={{marginTop: '7%'}}>"Успех или успеть"</h1>
          <p style={{display: 'flex', justifyContent: 'center', fontSize: '13px', bottom: '12px', position: 'relative'}}>Алексей Гончаров</p>
         </div>
        <div className='card-bottom'>
          <p className='number'>4</p>
          <img src={star} alt={star} className="star"/>
          <button className='btn-read'>Посмотреть</button>
        </div>
      </div>

      <div className='card-book3'>
         <div className='card-top'>
          <img src={book} alt='book'/>
          <h1 style={{marginTop: '7%'}}>"Успех или успеть"</h1>
          <p style={{display: 'flex', justifyContent: 'center', fontSize: '13px', bottom: '12px', position: 'relative'}}>Алексей Гончаров</p>
         </div>
        <div className='card-bottom'>
          <p className='number'>4</p>
          <img src={star} alt={star} className="star"/>
          <button className='btn-read'>Посмотреть</button>
        </div>
      </div>
      </div>
      <div className='data-person'>
      <img src={person} alt='profil' className='person'/>
      <img src={editprof} alt='profil' className='edit-prof' onClick={() => navigate("/editprofil")}/>
      <div className='data-title'>
        <span className='data-title2'>Логин:</span> <span >IvanI</span><br/>
        <span className='data-title2'>Имя:</span> <span >Иван</span><br/>
        <span className='data-title2'>Фамилия:</span> <span >Иванов</span><br/>
        <span className='data-title2'>Почта:</span> <span >@ivan.ivanov</span>
      </div>
      <div className='line'></div>
      <h4 className='history-search'>История поиска</h4>
      <img src={timehistory} alt='time-history' className='time-history'/>
      <div className='title-his'>
      <span className='title-his1'>"Внутри убийцы"</span><br/><span >Марк Омерк</span>
      </div>
      </div>
    </div>
  )
}

export default BookList