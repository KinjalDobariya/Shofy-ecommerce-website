import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button, Row, Card, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';
import { addcart } from '../../App/callapi/Addtocart';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../Loader/loader';
import Topheader from '../Topheader/Topheader';
import Header from '../Header/header';
import Banner from '../Banner/Banner';



function Product() {
    const Cartdata = useSelector((state) => state.addtocart);
    console.log(Cartdata);
    const dispatch = useDispatch();
    let [val, setval] = useState([]);
    let [status, setStatus] = useState(false)
    const [sticky, setSticky] = useState(false);



    const handleScroll = () => {
        if (window.scrollY > 100) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {

        axios.get('https://fakestoreapi.com/products')
            .then(function (response) {
                console.log(response.data);
                setval(response.data);
                setStatus(true);
            })
            .catch(function (error) {
                console.log(error);
            })

    }, [])

    if (!status) {
        return <Loader />;
    } else {

        return (
            <>
                <Topheader />
                <div className={`header ${sticky ? 'sticky' : ''}`}>
                    <Header />
                </div>
                <Banner />
                <section className='product_sec'>
                    <Container>
                        <Row>
                            <Col xs={12} className='text-center'>
                                <h2 className='heading'>Popular Departments</h2>
                            </Col>
                            <Col xs={12}>
                                <div className='d-flex justify-content-center mb-3 product_btn'>
                                    <Button className='btn'>New arrivals</Button>
                                    <Button className='btn'>Best seller</Button>
                                    <Button className='btn'>most popular</Button>
                                    <Button className='btn'>Featured</Button>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className="product_flex">
                                    {
                                        val.map((item, index) => {
                                            return (
                                                <div className="product_border">
                                                    <div className="product_img">
                                                        <img src={item.image} alt="" className='img-fluid' />
                                                    </div>
                                                    <div className="product_body">
                                                        <div className="product_title">
                                                            {item.title.slice(0, 20)}
                                                        </div>
                                                        <div className="product_price">
                                                            {item.description.slice(0, 25)}
                                                        </div>
                                                        <div className="product_price">
                                                            {'$'}{item.price}
                                                        </div>
                                                        <Link to="/cart"><Button className='product_button' onClick={() => dispatch(addcart(item))}>Addtocart</Button></Link>
                                                    </div>
                                                </div>
                                            )

                                        })
                                    }

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

            </>

        )
    }
}

export default Product
