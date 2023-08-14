import React from 'react'
import './topheader.css'
import { Col, Row } from 'react-bootstrap'
import { IoCall } from "react-icons/io5";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';


function Topheader() {
    return (
        <div>
            <div className='top_header d-lg-block d-none'>
                <Row className='top_space center_content'>
                    <Col lg='10'>
                        <ul className='top_menu'>
                            <li><Link to=""><IoCall className='top_icon' />(001) 8845-7898</Link></li>
                        </ul>
                    </Col>
                    <Col className='social_icon'>
                        <ul className='flex top_menu'>
                            <li>
                                <Link to="https://www.facebook.com/"><BsFacebook /></Link></li>
                            <li>
                                <Link to="https://twitter.com"><BsTwitter /></Link> </li>
                            <li>
                                <Link to=""><BsInstagram /></Link> </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Topheader
