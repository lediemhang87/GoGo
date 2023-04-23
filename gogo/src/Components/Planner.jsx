import React, {useEffect, useState} from 'react'
import axios from 'axios'
import parse from 'html-react-parser';
import Navbar from './Navbar';
import Prompt from './PlanPageComps/Prompt';
const Introduction = () => {
    const [chatQuestion, setChatQuestion] = useState({content: ''})
    const [chatAnswer, setChatAnswer] = useState()

    

//     function handleChange(e) {
//         e.preventDefault();
//         setChatQuestion({Content: e.target.value + 
//         `Please make sure provide the answer in HTML div and in table format. The table should have day number, activity and location and budget.
//         Give the same output as this structure
//         <head>
//             <style>
//                 table {
//                         border-collapse: collapse;
//                         width: 100%;
//                         margin-bottom: 20px;
//                         box-shadow: 2px 2px 5px #999;
//                 }
//                 tr:nth-child(even) {
//                         background-color: #f2f2f2;
//                 }
//                 th {
//                         background-color: #4CAF50;
//                         color: white;
//                         font-weight: bold;
//                         text-align: left;
//                         padding: 10px;
//                 }
//                 td {
//                         padding: 10px;
//                 }
//                 td{
//                     text-align: left;
//                 }
//             </style>
//         </head>
//     <body>
//         <h1>Paris Itinerary</h1>
//         <table>
//                 <tr>
//                         <th>Day</th>
//                         <th>Activity</th>
//                         <th>Location</th>
//                         <th>Budget</th>
//                 </tr>
//                 <tr>
//                         <td>1</td>
//                         <td>Visit the Eiffel Tower</td>
//                         <td>Eiffel Tower</td>
//                         <td>€25 per person (to the top)</td>
//                 </tr>
//                 <tr>
//                         <td></td>
//                         <td>Explore the Louvre Museum</td>
//                         <td>Louvre Museum</td>
//                         <td>€15 per person</td>
//                 </tr>
//                 <tr>
//                         <td></td>
//                         <td>Stroll along the Champs-Élysées</td>
//                         <td>Champs-Élysées</td>
//                         <td>Free</td>
//                 </tr>
//                 <tr>
//                         <td>2</td>
//                         <td>Explore Montmartre</td>
//                         <td>Montmartre</td>
//                         <td>Free</td>
//                 </tr>
//                 <tr>
//                         <td></td>
//                         <td>Visit the Sacré-Cœur Basilica</td>
//                         <td>Sacré-Cœur Basilica</td>
//                         <td>Free</td>
//                 </tr>
//                 <tr>
//                         <td></td>
//                         <td>Explore the Notre-Dame Cathedral</td>
//                         <td>Notre-Dame Cathedral</td>
//                         <td>Free</td>
//                 </tr>
//                 <tr>
//                         <td>3</td>
//                         <td>Visit the Palace of Versailles</td>
//                         <td>Palace of Versailles</td>
//                         <td>€20 per person</td>
//                 </tr>
//                 <tr>
//                         <td></td>
//                         <td>Explore the Sainte-Chapelle</td>
//                         <td>Sainte-Chapelle</td>
//                         <td>€10 per person</td>
//                 </tr>
//                 <tr>
//                         <td></td>
//                         <td>Explore the Musée d'Orsay</td>
//                         <td>Musée d'Orsay</td>
//                         <td>€14 per person</td>
//                 </tr>
//             </table>
//         </body>`})
//     }


//     async function getResponse(e){
//         e.preventDefault();
//         axios.post(`/api`, chatQuestion).then((response) => {
//         console.log(response.data.data.choices[0].message.content)
//         setChatAnswer(response.data.data.choices[0].message.content)
//         })
//     }

    async function callback(answer) {
        // setChatQuestion({content: answer}) 
        axios.post(`/api`, {content: answer}).then((response) => {
                console.log(response.data.data.choices[0].message.content)
                setChatAnswer(response.data.data.choices[0].message.content) 
                console.log(response)
        })
        // console.log(answer)
    }

    return(
        <div>
                <Navbar/>
                <Prompt parentCallback={callback}/>
                <div className='container'> 
                        {/* <label> Prompt </label>
                        <input onChange={handleChange} name="question"/>
                        <button onClick={getResponse}> Submit </button> */}
                        <p> {parse(`${chatAnswer}`)} </p>
                </div>
                
                
        </div>
    )
        
}

export default Introduction