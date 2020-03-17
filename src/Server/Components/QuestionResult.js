import React, {useState, useEffect} from 'react'

const QuestionResult = (props) =>
{
    const Submit= (e) => {
        e.preventDefault();
        props.Ready();
    }

    let question = props.Question.Question;
    let a = props.Question.A;
    let b = props.Question.B;
    let c = props.Question.C;
    let d = props.Question.D;

    return(

        <div className="card-panel" >
            <h1>{question}</h1>
            <br></br>
            <h4>Correct Answer:</h4>
            <h3>{a}</h3>

            <button className="btn" onClick={(e)=>Submit(e)}>Next</button>
        </div>
    )

}


export default QuestionResult