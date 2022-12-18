import React from 'react';
import { Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
import BookCard from '../BookCard/BookCard';
import { bookContext } from '../../Context/BookContextProvider';
import { useEffect } from 'react';
import { useContext } from 'react';





const BookList = () => {
  const { booksArr, readBook } = useContext(bookContext);


  
  useEffect(() => {
    readBook();
  }, []);




  


  return (
    <Container>
     
              
                  
          <div className="d-flex align-items-center justify-content-center gap-4 mb-4">     
           <Link to = '/addBook'>
       <button className='d-flex align-items-end gap-2'>   
                   AddFood
              </button>
              </Link> 
                      </div> 
          <Row>
          <Row className="d-flex align-items-center justify-content-center gap-4 mb-4">
              {booksArr ? booksArr.map((item) => (  
            <Col key={item.id} >
              <BookCard obj={item} />
                      </Col>
                   
              )) : null}
              </Row></Row>

          </Container>
)
}

export default BookList