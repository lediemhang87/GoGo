import React, {useEffect, useState} from 'react'
import '../../Styles/Styles.Prompt.scss'

const Prompt = ({ parentCallback }) => {
    const [prompt , setPrompt] = useState('');
    const [location, setLocation] = useState('');
    const [interval, setInterval] = useState('');
    const [budget, setBudget] = useState('');

    async function handleSubmit(e) {

        const newPrompt = `Please give me a ` + interval + ` plan for traveling to ` + location + ` with budget ` + budget + `. Please make sure provide the answer in HTML div and in table format. The table should have day number, activity and location and budget.
        Give the same output as this structure
        <head>
            <style>
                table {
                        border-collapse: collapse;
                        width: 100%;
                        margin-bottom: 20px;
                        box-shadow: 2px 2px 5px #999;
                }
                tr:nth-child(even) {
                        background-color: #f2f2f2;
                }
                th {
                        background-color: #124449;
                        color: white;
                        font-weight: bold;
                        text-align: left;
                        padding: 10px;
                }
                td {
                        padding: 10px;
                }
                td{
                    text-align: left;
                }
            </style>
        </head>
    <body>
        <table>
                <tr>
                        <th>Day</th>
                        <th>Activity</th>
                        <th>Location</th>
                        <th>Budget</th>
                </tr>
                <tr>
                        <td>1</td>
                        <td>Visit the Eiffel Tower</td>
                        <td>Eiffel Tower</td>
                        <td>€25 per person (to the top)</td>
                </tr>
                <tr>
                        <td></td>
                        <td>Explore the Louvre Museum</td>
                        <td>Louvre Museum</td>
                        <td>€15 per person</td>
                </tr>
                <tr>
                        <td></td>
                        <td>Stroll along the Champs-Élysées</td>
                        <td>Champs-Élysées</td>
                        <td>Free</td>
                </tr>
                <tr>
                        <td>2</td>
                        <td>Explore Montmartre</td>
                        <td>Montmartre</td>
                        <td>Free</td>
                </tr>
                <tr>
                        <td></td>
                        <td>Visit the Sacré-Cœur Basilica</td>
                        <td>Sacré-Cœur Basilica</td>
                        <td>Free</td>
                </tr>
                <tr>
                        <td></td>
                        <td>Explore the Notre-Dame Cathedral</td>
                        <td>Notre-Dame Cathedral</td>
                        <td>Free</td>
                </tr>
                <tr>
                        <td>3</td>
                        <td>Visit the Palace of Versailles</td>
                        <td>Palace of Versailles</td>
                        <td>€20 per person</td>
                </tr>
                <tr>
                        <td></td>
                        <td>Explore the Sainte-Chapelle</td>
                        <td>Sainte-Chapelle</td>
                        <td>€10 per person</td>
                </tr>
                <tr>
                        <td></td>
                        <td>Explore the Musée d'Orsay</td>
                        <td>Musée d'Orsay</td>
                        <td>€14 per person</td>
                </tr>
            </table>
        </body>

        `
        // setPrompt (newPrompt)
        parentCallback(newPrompt)
    }
    const handleChangeLocation = (e) => {
        // e.preventDefault();
        setLocation(e.target.value)
    }

    const handleChangeInterval = (e) => {
        // e.preventDefault();
        setInterval(e.target.value)
    }

    const handleChangeBudget = (e) => {
        // e.preventDefault();
        setBudget(e.target.value)
    }

    return(
        <div>
            <div className='prompt'>
                <div className='overlay'></div>
                <img className='headerImg' src={require("../../Styles/img/TravelPlanImg.png")} alt=""/>
         
                <div className='homeContent container'>
                    <h1 className='questionHeader'> Where are you going? </h1>
                    <div className='textDiv container'>
                        <div className='row'> 
                            <div className='col-lg-4'>
                                <p> Traveling to: </p>
                                <input onChange={handleChangeLocation} placeholder='San Francisco, Paris, Singapore, e.g'/>
                            </div>
                            <div className='col-lg-4'>
                                <p> Time interval: </p>
                                <input onChange={handleChangeInterval} placeholder='3 days, 10 days, 2 weeks, 1 month, e.g '/>
                            </div>
                            <div className='col-lg-4'>
                                <p> Budget </p>
                                <input onChange={handleChangeBudget} placeholder='$300, $1000, $5000, e.g'/>
                        </div>
                    </div>
                        
                        
                        
                        <div> 
                            <a><button onClick={handleSubmit}> Plan your trip </button> </a>
                        </div>
                        
                        
                    </div>
                </div>

            </div>
        </div>
    )

}
export default Prompt