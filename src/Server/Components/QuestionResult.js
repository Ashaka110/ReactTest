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

    let aans = props.Question.Aans;
    let bans = props.Question.Bans;
    let cans = props.Question.Cans;
    let dans = props.Question.Dans;



    const Answer = (text, correct) =>{

        let color= "red";
        if(correct){
            color = "green";
        }

        return (
            <div className={"col s6 card " + color}>
                <div className={"card-content"}>
                    <h3> {text} </h3> 
                </div>
            </div>
        )
    }

    return(
        //<div className="card-panel" >
            //<h1>{question}</h1>
            //<br></br>
            //<h4>Correct Answer:</h4>
            //<h3>{a}</h3>

            //<button className="btn" onClick={(e)=>Submit(e)}>Next</button>
        //</div>
        <div className="card-panel" >
            <h1>{question}</h1>
            <div className="row">
                {Answer(a,  aans)}
                {Answer(b,  bans)}
                {Answer(c,  cans)}
                {Answer(d,  dans)}
            </div>
            <button className="btn" onClick={(e)=>Submit(e)}>Ready</button>
        </div>

    )

}


export default QuestionResult