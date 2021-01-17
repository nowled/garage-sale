import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import axios from 'axios';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap';

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };

    fetchProduct();
  }, [match]);

  const pRatingPrice = {
    backgroundColor: '#593196',

    color: '#fff',
  };

  const pNameDescription = {
    backgroundColor: '#6610f2',
    color: '#fff',
    opacity: 0.8,
  };

  // const buttonStyle = {
  //   backgroundColor: '#593196',
  // };

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem style={pNameDescription}>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem style={pRatingPrice}>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem style={pRatingPrice}>
              Price: ${product.price}
            </ListGroupItem>
            <ListGroupItem style={pNameDescription}>
              Description: {product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem style={pRatingPrice}>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem style={pRatingPrice}>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0
                      ? 'In Stock, We got it!'
                      : 'Out Of Stock, You are shit out of luck'}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem style={pNameDescription}>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
