import React from 'react'

const Results = (props) =>
{
    let question = 'Question';//props.Question.Question;
    let a = 'A1';//props.Question.A;
    let b = 'B';//props.Question.B;
    let c = 'C';//props.Question.C;
    let d = 'D';//props.Question.D;

    const submit= (e) => {
        e.preventDefault();

        props.submit();
    }


    const Answer = (text, color) =>{
        return (
            <div className={"btn btn-large col s6 " + color} onClick={submit} >{text}</div>
        )
    }

    return(

        <div className="card-panel" >
            <h5>Results</h5>
            <h1 name="question" id="questionHeader">{question}</h1>

        </div>
    )

}


export default Results