import React from 'react'

const Question = (props) =>
{
    let question = props.Question.Question;
    let a = props.Question.A;
    let b = props.Question.B;
    let c = props.Question.C;
    let d = props.Question.D;

    const submit= (e, id) => {
        e.preventDefault();

        props.submit(id);
    }


    const Answer = (id, text, color) =>{
        return (
            <div className={"btn btn-large col s6 " + color} onClick={(e)=>submit(e, id)} >{text}</div>
        )
    }

    return(

        <div id="joinPage" className="card-panel" >
            <h1 name="question" id="questionHeader">{question}</h1>
            <div className="row">
                {Answer('A', a, 'red')}
                {Answer('B', b, 'green')}
                {Answer('C', c, 'blue')}
                {Answer('D', d, 'yellow')}
            </div>
        </div>
    )

}


export default Question