import React from 'react'
import "../../styles/SearchCard.css"
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Link,useNavigate } from 'react-router-dom';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const SearchCard = ({ obj }) => {
  
  const navigate = useNavigate();
  return (
    <>
      <Link to={'/detailsbook/'+obj.id}>
      <div className='cards'>
        <div  className='сard p-1' style={{ display: "flex", justifyContent: 'start'}}>
            
            <img className='img11' src={obj.image_url} style={{ width: 50, height:50 }} alt="Frame1" />
          <div><span>{obj.name}</span><br/>
                <span>{obj.author }</span></div>
            
    
           
        </div>
        </div>
        </Link>
    </>
  )
}

export default SearchCard