import React, {useEffect, useState} from 'react'
import axios from 'axios'
import parse from 'html-react-parser';
import Navbar from './Navbar';
import Prompt from './PlanPageComps/Prompt';
import '../Styles/Styles.Planner.scss'

const Introduction = () => {
    const [chatAnswer, setChatAnswer] = useState()
    const [loading, setLoading] = useState(false)

    async function callback(question) {
        setLoading(true)
        axios.post(`/api`, {content: question}).then((response) => {
                console.log(response.data.data.choices[0].message.content)
                setChatAnswer(response.data.data.choices[0].message.content) 
                setLoading(false)
        })
    }

    return(
        <div className='OuterPlanner'>
                <Navbar/>
                <Prompt parentCallback={callback}/>
                
                <div className='container '> 
                        <div className='planner'>
                                {(loading) ? (
                                        <div className='loading'> 
                                                <img className="loadingIcon" src={require("../Styles/img/loading.gif")} alt=""/>
                                                <h4 className='loadingText'> We are generating your plan. Please wait... </h4>
                                        </div>) 
                                        : (<div> 
                                                {(typeof chatAnswer === 'undefined') ? 
                                                        (<div className='undefinedDiv'> 
                                
                                                                <div className='undefinedDivContent'>
                                                                        <img className="plannerIcon" src={require("../Styles/img/planning.png")} alt=""/>
                                                                        <h3> Please plan your trip.</h3>
                                                                        <p> Your generated planner will be printed here </p>
                                                                </div>
                                                        </div>) 
                                                        : 
                                                        (<div className='definedDiv'> 
                                                        
                                                                <p> {parse(`${chatAnswer}`)} </p> 
                                                        
                                                        </div>)
                                                }
                                        </div>)
                                }
                                
                        </div>
                </div>
                <div className='container'>
                        Footer
                </div>
                
                
                
        </div>
    )
        
}

export default Introduction