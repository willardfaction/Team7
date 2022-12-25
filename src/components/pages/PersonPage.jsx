import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import star from "../../images/icons/staricon.png";
import "../../styles/PersonPage.css";
import editprof from "../../images/icons/editprof.png"
import { authContext } from '../contexts/authContext';


const PersonPage = () => {
    const { currentUser, user } = useContext(authContext);

    const navigate = useNavigate();
    return (<>
        <div>
          <span className='title-my-book'>Мои книги</span>
          <span className='title-save'>Сохраненные</span>
          <div className='my-book'>
          <a className='download-book' href="/downbook">+Загрузить книгу</a>
          <div className='card-book1'>
             <div className='card-top'>
              <img alt='book'/>
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
              <img  alt='book'/>
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
              <img alt='book'/>
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
            {currentUser ?
                <div className='data-person'>
               
                <img src={user.avatar_url} alt='profil' className='person'/>
          <img src={editprof} alt='profil' className='edit-prof' onClick={() => navigate("/editProfile")}/>
          <div className='data-title'>
                        <span className='data-title2'>Логин:</span> <span >{user.username}</span><br/>
                        {user.name ? <><span className='data-title2'>Имя:</span> <span >{user.name}</span><br/> </>: null} 
                        {user.surname ? <> <span className='data-title2'>Фамилия:</span> <span >Иванов</span><br /></> : null}
                        <span className='data-title2'>Почта:</span> <span >{user.email}</span>
          </div> </div>: null}
          {/* <h4 className='history-search'>История поиска</h4>
          <img  alt='time-history' className='time-history'/>
          <div className='title-his'>
          <span className='title-his1'>"Внутри убийцы"</span><br/><span >Марк Омерк</span>
          </div> */}
        </div>
        
        </>)
}

export default PersonPage



 