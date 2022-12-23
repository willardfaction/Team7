// import React from 'react'
// import "../styles/BookCard.css"
// import Frame1 from "../img/Frame1.png"
// import like from "../img/like.png"
// import vectorIzbran from "../img/vectorIzbran.png"
// import saveDown from "../img/saveDown.png"
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import Typography from '@mui/material/Typography';

// const StyledRating = styled(Rating)({
//   '& .MuiRating-iconFilled': {
//     color: '#ff6d75',
//   },
//   '& .MuiRating-iconHover': {
//     color: '#ff3d47',
//   },
// });

// const BookCard = () => {
//   return (
//     <>
//       <h2 className='title-TopKnigi'>Топ книги</h2>

//       <div className='cards'>
//         <div className='card'>
//             <div className='gray-fon'>
//             <img src={Frame1} alt="Frame1" className='img-book'/>
//         <Box
//           sx={{ ml: 1.5,
//           '& > legend': { mt: 0 },
//              }}
//         >
//           <Typography component="legend"></Typography>
//           <Rating name="customized-10" defaultValue={2} max={5} />
//         </Box>
//             <img src={like} alt="like" className='like'/>
//             </div>
//             <div className='title-book'>
//             <h3 className='h3'>«Успех или успеть» <br/>
//             </h3>
//             <p className='p'>Алексей Гончаров<br/>
//             Данная книга раскрывает Вам, уважаемый читатель, пошаговые действия достижения успеха. Поможет понять и осознать, что именно для Вас является успехом. Поможет обрести здоровье, любовь, финансовую независимость и прочее факторы успешных людей. Советую Вам прочесть ее несколько раз,или сделать так</p>
//             </div>
//             <button className='btn-read'>Читать</button>
//             <img src={vectorIzbran}alt="vectorIzbran" className='vectorIzbran' />
//             <img src={saveDown} alt="saveDown" className='saveDown'/>
//         </div>
//       </div>
//     </>
//   )
// }

// export default BookCard