import React from 'react';


function QuestionItem(props){

    return (
        <div>
            <li>
                <div className="row">
                    <div className="col s9">
                            <h6> {props.doc.Question}</h6>
                        <p>Answers</p>
                    </div>
                    <div className="col s2">
                        <i onClick={(e) => props.Select(props.num)} className="material-icons">arrow_drop_up</i>
                        <i className="material-icons">arrow_drop_down</i>
                        <i onClick={(e) => props.Delete(props.num)} className="material-icons">delete_forever</i>
                    </div>
                </div>
            </li>
        </div>
    )

}

export default QuestionItem

