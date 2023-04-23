import React, {useEffect, useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/Styles.Introduction.scss'
import Navbar from './Navbar';
import Header from './IntroPageComps/Header';


const Introduction= () => {
    return (
    <div>
        <Navbar/>
        <Header/>
    </div>)
}

export default Introduction