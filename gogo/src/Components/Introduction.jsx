import React, {useEffect, useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/Styles.Introduction.scss'
import Navbar from './Navbar';


const Introduction= () => {
    return (
    <div>
        <Navbar/>
        <div className='container'> 
            <div className='Introduction'>
                <h1> Hello </h1>
            </div>
        </div>
    </div>)
}

export default Introduction