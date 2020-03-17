import React, {useState, useEffect} from 'react'

const Question = (props) =>
{
    let question = props.Question.Question;
    let a = props.Question.A;
    let b = props.Question.B;
    let c = props.Question.C;
    let d = props.Question.D;

    const Submit= (e) => {
        e.preventDefault();
        props.Ready();
    }

    const Answer = (text, color) =>{
        return (
            <div className={"col s6 card " + color}>
                <div className={"card-content"}>
                    <h3> {text} </h3> 
                </div>
            </div>
        )
    }
    return(

        <div className="card-panel" >
            <h1>{question}</h1>
            <div className="row">
                {Answer(a, 'red')}
                {Answer(b, 'green')}
                {Answer(c, 'blue')}
                {Answer(d, 'yellow')}
            </div>
            <button className="btn" onClick={(e)=>Submit(e)}>Ready</button>
        </div>
    )

}


export default Question