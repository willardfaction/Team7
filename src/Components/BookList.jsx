import React, { useContext, useEffect } from 'react'
import BookCard from './BookCard';
import { Container, Row, Col} from "reactstrap";
import { bookContext } from './contexts/bookContext';
import "../styles/BookList.css"

const BookList = () => {
 
  const { readBook, booksArray } = useContext(bookContext);
  useEffect(() => {
    console.log("dd");
    readBook();
  }, []);



  return (
    <Container>
      <Row>
        <div className='div-fl'>
      
      {booksArray ? booksArray.map((item) => ( 
          <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-5">
          <BookCard obj={item} />
          </Col>
      )) : null}
          </div>
    </Row>    
        </Container>
  )
}

export default BookList