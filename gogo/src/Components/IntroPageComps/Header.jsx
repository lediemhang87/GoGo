import React, {useEffect, useState} from 'react'
import '../../Styles/Styles.Header.scss'

const Header = () => {
    return(
        <div className='home'>
           <div className='overlay'></div>
           <img className='dalat' src={require("../../Styles/img/dalat.jpg")} alt=""/>

            <div className='homeContent container'>
                
                <div className='textDiv'>
                    <img src={require("../../Styles/img/takeoff.png")} alt="" style={{"width": "100px"}}/>
                    <br/><br/>
                    <h2 className='homeTitle'> Plan your next vacation with ease </h2>
                    <p> Plan your next adventure with ease using our intuitive travel app. From booking flights and accommodations to creating custom itineraries, we make travel planning a breeze. </p>
                    <div> 
                        <a href={'/planner'}><button> Plan your trip </button> </a>
                        <button> Plan your flights </button>
                    </div>
                </div>

                
            </div>

        </div>
        
    )
}

export default Header