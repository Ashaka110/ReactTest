import React, {useState} from 'react'

const QuestionForm = (props) =>{

    const quest = props.Question;

    function field (id){
        return  <input type="text" id={id} value={props.Questions[props.Num][id]} onChange={e => {props.Update(id, e.currentTarget.value )}} />
    }
    function checkbox (id){
        return <><input type="checkbox" checked={quest[id]} onChange={e => { props.Update(id, e.currentTarget.checked) }} /> <span></span></>
    }
    function answerField (id){
        return(
            <div className="row">
                <label className="col s1">
                    {checkbox(id + 'ans')}
                </label>
                <div className="col s11 input-field">
                    {field(id)}
                    <label>{id}</label>
                </div>
            </div>
        )
    }
    
    return (
        <div className="card-panel">
            <form>
                <div className="row">
                    <div className="col s1 input-field">
                        <label htmlFor="question"># {props.Num +1}</label>
                    </div>
                    <div className="col s11 input-field">
                        <label htmlFor="question">Question</label>
                        {field('Question')}
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 input-field">
                        {answerField('A')}
                    </div>
                    <div className="col s6 input-field">
                        {answerField('B')}
                    </div>
                    <div className="col s6 input-field">
                        {answerField('C')}
                    </div>
                    <div className="col s6 input-field">
                        {answerField('D')}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default QuestionForm