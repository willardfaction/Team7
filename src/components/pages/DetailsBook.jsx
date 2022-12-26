import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import '../../styles/DetailsBook.css';
import CloseIcon from '@mui/icons-material/Close';
import editprof from "../../images/icons/editprof.png"
import book from '../../images/icons/book.png';
import star from '../../images/icons/staricon.png'
import deletebtn from '../../images/icons/deletebtn.png'
import { bookContext } from '../contexts/bookContext';
import { authContext } from '../contexts/authContext';

const DetailsBook = () => {
  const { getOneBook, oneBook } = useContext(bookContext);
  const { currentUser } = useContext(authContext);
    const navigate = useNavigate();
    const { id } = useParams();
    
  useEffect(() => {
  getOneBook(id)
},[])
  return (
    <div>
      {oneBook ? <div className='div-form'>
        <CloseIcon className='close2' style={{position: 'relative', left: '10px', top: '10px'}} onClick={() => navigate("/")}/>
        <img src={oneBook.image_url} alt='book' className='book-detail'/>
        <button className='btn-read2'>Читать</button>
        <button className='btn-downl'>Скачать</button>

      
        
        <div>
          <h3 className='t_name'>{oneBook.name }</h3>
        <p className='title_p'>{oneBook.description}</p>
        <div className='data_title'>
        <span className='data_title2'>Автор:</span> <span >{oneBook.author}</span><br/>
            {oneBook.genres[0].name ?<><span className='data_title2'>Жанр:</span> <span >{oneBook.genres[0].name }</span></>:null}<br/>
            <span className='data_title2'>Возрастное ограничение:</span> <span >{oneBook.count_of_reviews}</span><br/>
            <span className='data_title2'>Дата издание:</span> <span >{oneBook.year}</span>
          </div>
          
        </div>
        {currentUser ?<> <img src={editprof} alt='profil' className='edit-prof2' onClick={() => navigate("/editbook")}/>
        <img src={deletebtn} alt='delete' className='delete' onClick={() => navigate("")}/></>:null}
       
        </div>:null}
        
    </div>
  )
}

export default DetailsBook