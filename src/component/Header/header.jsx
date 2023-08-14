import './header.css'
import Topheader from "../Topheader/Topheader"
import Logo from '../image/logo.png'
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { useState } from 'react'


function Header() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

            <div className="header">
                <Container>
                    <Row className='py-4 center_content'>
                        <Col lg={2} md={4} sm={6} xs={6}>
                            <img src={Logo} alt="" className='img-fluid' />
                        </Col>
                        <Col lg={4} md={4} className='d-lg-block d-none'>
                            <ul className='flex header_menu'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to=''>Blog</Link></li>
                                <li><Link to=''>Contact Us</Link></li>
                            </ul>
                        </Col>
                        <Col lg={4} md={4} className='d-lg-block d-none'>
                            <ul className='flex search_menu'>
                                <li>
                                    <form method="get" className="header-search d-none d-md-flex">
                                        <div className="select-box">
                                            <select id="category" name="category">
                                                <option value=""></option>
                                                <option value="">1</option>
                                            </select>
                                        </div>
                                        <input type="text" className="form-control" name="search" id="search" placeholder="Search in..." required="" />
                                        <button className="btn" type="submit" ><BiSearch className='search_icon' /></button>
                                    </form>
                                </li>
                                <li>
                                    <div className='search_li'>
                                        <AiOutlineHeart className='search2_icon' />
                                    </div>
                                </li>
                                <li >
                                    <div className='search_li_sec'>
                                        <BsCart className='search3_icon' />
                                    </div>
                                </li>
                            </ul>

                        </Col>
                        <Col lg={2} md={2} sm={2} xs={2} className=" text-end d-lg-none d-block">
                            <FaBars className='bar_icon' onClick={handleShow} />
                            <Offcanvas show={show} onHide={handleClose} placement="end" backdrop="true">
                                <IoMdClose className='off_icon' onClick={handleClose} />
                                <Offcanvas.Header >
                                    <Offcanvas.Title> <img src={Logo} alt="" className='img-fluid' /></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <ul className='flex header_menu'>
                                        <li className='px-2'>
                                            <div className='search_li'>
                                                <AiOutlineHeart className='search2_icon' />
                                            </div>
                                        </li>
                                        <li className='px-2'>
                                            <div className='search_li_sec'>
                                                <BsCart className='search3_icon' />
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className='header_menu my-3'>
                                        <li className='my-3'><Link to='/'>Home</Link></li>
                                        <li className='my-3'><Link to=''>Blog</Link></li>
                                        <li className='my-3'><Link to=''>Contact Us</Link></li>
                                        <li className='my-3'><Link to=''>My Account</Link></li>
                                    </ul>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Header
