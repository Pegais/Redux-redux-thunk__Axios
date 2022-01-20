import React, { useState, useEffect } from 'react'
import axios from "axios";
import logo from '../images/logo.png'



export default function Navbar(props) {


    return (
        <>
            <nav>
                <img src={logo} />
                <div className='cart'>Cart
                    <div className='counter'>0</div>
                </div>
            </nav>
        </>
    )
}
