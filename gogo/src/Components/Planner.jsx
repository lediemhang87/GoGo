import React, {useEffect, useState} from 'react'
import axios from 'axios'
import parse from 'html-react-parser';
const Introduction = () => {
    const [chatQuestion, setChatQuestion] = useState({content: ''})
    const [chatAnswer, setChatAnswer] = useState()

    function handleChange(e) {
        e.preventDefault();
        setChatQuestion({Content: e.target.value + `Please provide the answer in HTML div table format. The table should have day number, activity and location`})
        console.log(chatQuestion)
    }
    async function getResponse(e){
        e.preventDefault();
        axios.post(`/api`, chatQuestion).then((response) => {
        console.log(response.data.data.choices[0].message.content)
        setChatAnswer(response.data.data.choices[0].message.content)
        })
    }

    return(
        <div>
            <label> Prompt </label>
            <input onChange={handleChange} name="question"/>
            <button onClick={getResponse}> Submit </button>
            <p> {parse(`${chatAnswer}`)} </p>
            
        </div>
    )
        
}

export default Introduction