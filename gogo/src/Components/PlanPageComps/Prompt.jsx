import React, {useEffect, useState} from 'react'
import '../../Styles/Styles.Prompt.scss'

const Prompt = ({ parentCallback }) => {
    const [origin, setOrigin] = useState('')
    const [location, setLocation] = useState('');
    const [interval, setInterval] = useState('');
    const [budget, setBudget] = useState('');
    const [noPpl, setNoPpl] = useState('');

    async function handleSubmit(e) {
        e.preventDefault() 
        const newPrompt = `Please give me a ` + interval + ` plan for traveling from `+ origin + ` to ` + location + ` with budget ` + budget + `each person, for `+ noPpl + `people . Please make sure provide the answer in HTML div and in table format. The table should have day number, activity and location and budget.
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
                        <td contentEditable="true">1</td>
                        <td contentEditable="true">Visit location A</td>
                        <td contentEditable="true">Location A</td>
                        <td contentEditable="true">€ per person</td>
                </tr>
                <tr>
                        <td contentEditable="true"></td>
                        <td contentEditable="true" >Have lunch at location B</td>
                        <td contentEditable="true" >location B</td>
                        <td contentEditable="true" >$ per person</td>
                </tr>
                <tr>
                        <td contentEditable="true" ></td>
                        <td contentEditable="true" >Explore the Louvre Museum</td>
                        <td contentEditable="true">Louvre Museum</td>
                        <td contentEditable="true">€15 per person</td>
                </tr>
                
                <tr>
                        <td contentEditable="true"></td>
                        <td contentEditable="true" >Stroll along the Champs-Élysées</td>
                        <td contentEditable="true" >Champs-Élysées</td>
                        <td contentEditable="true" >Free</td>
                </tr>
                <tr>
                        <td contentEditable="true"></td>
                        <td contentEditable="true">Have dinner at location C</td>
                        <td contentEditable="true">location C</td>
                        <td contentEditable="true">$ per person</td>
                </tr>
                <tr>
                        <td contentEditable="true">1</td>
                        <td contentEditable="true">Visit location A</td>
                        <td contentEditable="true">Location A</td>
                        <td contentEditable="true">€ per person</td>
                </tr>
                <tr>
                        <td contentEditable="true"></td>
                        <td contentEditable="true">Have lunch at location B</td>
                        <td contentEditable="true">location B</td>
                        <td contentEditable="true">$ per person</td>
                </tr>
                <tr>
                        <td contentEditable="true"></td>
                        <td contentEditable="true">Explore the Louvre Museum</td>
                        <td contentEditable="true">Louvre Museum</td>
                        <td contentEditable="true">€15 per person</td>
                </tr>
                
                <tr>
                        <td contentEditable="true"></td>
                        <td contentEditable="true">Stroll along the Champs-Élysées</td>
                        <td contentEditable="true">Champs-Élysées</td>
                        <td contentEditable="true">Free</td>
                </tr>
                <tr>
                        <td contentEditable="true"></td>
                        <td contentEditable="true">Have dinner at location C</td>
                        <td contentEditable="true">location C</td>
                        <td contentEditable="true">$ per person</td>
                </tr>
            </table>
            <p> Flight/ transportation cost from origin to destination </p>
            <p> Hotel cost for all the nights per 1 person: </p>
            <p> Total cost for 1 person: </>
        </body>

        `
        // setPrompt (newPrompt)
        parentCallback(newPrompt)
    }
    const handleChangeOrigin = (e) => {
        // e.preventDefault();
        setOrigin(e.target.value)
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

    const handleChangeNoPpl = (e) => {
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
                    <form onSubmit={handleSubmit}>
                        <div className='textDiv container'>
                            <div className='row'> 
                                <div className='col-lg-6'>
                                    <p> Traveling from </p>
                                    <input onChange={handleChangeOrigin} placeholder='San Francisco, Paris, Singapore, e.g' required/>
                                </div>
                                <div className='col-lg-6'>
                                    <p> Traveling to </p>
                                    <input onChange={handleChangeLocation} placeholder='San Francisco, Paris, Singapore, e.g' required/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <p> Time interval </p>
                                    <input onChange={handleChangeInterval} placeholder='3 days, 10 days, 2 weeks, 1 month, e.g ' required/>
                                </div>
                                <div className='col-lg-4'>
                                    <p> Budget per person </p>
                                    <input onChange={handleChangeBudget} placeholder='$300, $1000, $5000, e.g' required/>
                                </div>
                                <div className='col-lg-4'>
                                    <p> Number of people </p>
                                    <input onChange={handleChangeNoPpl} placeholder='1, 2, 3, 4, e.g' required/>
                                </div>
                            </div>
                            <button type="submit" value="Submit" > Plan your trip </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )

}
export default Prompt