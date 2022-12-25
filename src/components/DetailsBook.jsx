import React from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/DetailsBook.css';
import CloseIcon from '@mui/icons-material/Close';
import Avatar from "@mui/material/Avatar";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import editprof from '../img/editprof.png'
import book from '../img/book.png'
import star from '../img/star.png'
import deletebtn from '../img/deletebtn.png'

 const StyledRating = styled(Rating)({
   '& .MuiRating-iconFilled': {
     color: '#ff6d75',
   },
   '& .MuiRating-iconHover': {
     color: '#ff3d47',
   },
 });

const DetailsBook = () => {
    const navigate = useNavigate();

  return (
    <div>
        <div className='div-form'>
        <CloseIcon className='close2' style={{position: 'relative', left: '10px', top: '10px'}} onClick={() => navigate('/')}/>
        <BookmarkBorderIcon className='bookmarkBorderIcon'/>
        <img src={book} alt='book' className='book-detail'/>
        <button className='btn-read2'>Читать</button>
        <button className='btn-downl'>Скачать</button>

        <p className='numberr'>4</p>
        <img src={star} alt={star} className="starr"/>
        <a className='feedback' href="">+Оставить отзыв</a>
        
        <div>
        <h3 className='title_name'>«Успех или успеть»</h3>
        <p className='title_p'>«Успех или успеть» Данная книга раскрывает Вам, уважаемый читатель, пошаговые действия достижения успеха. Поможет понять и осознать, что именно для Вас является успехом. Поможет обрести здоровье, любовь, финансовую независимость и прочее факторы успешных людей. Советую Вам прочесть ее несколько раз,или сделать так ...</p>
        <div className='data_title'>
        <span className='data_title2'>Автор:</span> <span >IvanI</span><br/>
        <span className='data_title2'>Жанр:</span> <span >Иван</span><br/>
        <span className='data_title2'>Возрастное ограничение:</span> <span >Иванов</span><br/>
        <span className='data_title2'>Дата издание:</span> <span >@ivan.ivanov</span>
      </div>
        </div>
        <img src={editprof} alt='profil' className='edit-prof2' onClick={() => navigate("/editbook")}/>
        <img src={deletebtn} alt='delete' className='delete' onClick={() => navigate("")}/>
        </div>

        <div>
            <h2 className='title-reviews'>Отзывы</h2>
            <div>
            <Avatar
              className="avatar-item"
              onClick={() => navigate("/login")}
            />
            <span className='name-login'>s.v.1234</span>
            <p className='data'>7 августа 2019 г.</p>
            <Box
              sx={{ ml: 144,
              '& > legend': { mt: 68 },
              }}
            >
             <Typography component="legend"></Typography>
             <Rating name="customized-10" defaultValue={2} max={5} />
            </Box>
            <p className='reviews'>Читается на одном дыхании. Все просто и понятно. Спасибо большое автору!!! Читайте, внимайте и действуйте, очень полезная книга</p>
            </div>
            <h2 className='title-reviews2'>Оставьте отзыв</h2>
            <div className='fon-otzyv'>
            <Avatar style={{position: 'relative', right: '565px'}}/>
            <input type="text" className='inpput-reviews' placeholder='Что думаете о книге?' />
            <Box
            className='box'
              sx={{ ml: 53,
              '& > legend': { mt: 1 },
              }}
            >
             <Typography component="legend"></Typography>
             <Rating name="customized-10" defaultValue={2} max={5} />
            </Box>
            <div className='div-rating'></div>
            <button className='btn-publish'>Опубликовать</button>
            </div>
        </div>
    </div>
  )
}

export default DetailsBook