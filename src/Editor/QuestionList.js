import React from 'react';
import QuestionItem from './QuestionItem'

function QuestionList(props){

    console.log("list");
    return(
        <div>
            Questions
            <ol>
                {props.Questions.map((question, num) => 
                    <div className="card">
                        <QuestionItem doc={question} num={num} Delete={props.Delete} Select={props.Change} key={question.key} />
                    </div>
                )}
            </ol>
            <button onClick={(e) => props.AddQuestion()} className="btn">Add Question</button>
        </div>
    )    

}

export default QuestionList