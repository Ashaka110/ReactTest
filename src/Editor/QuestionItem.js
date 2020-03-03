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
                        <a onClick={(e) => props.Select(props.num)} > <i className="material-icons">arrow_drop_up</i> </a>
                        <a> <i className="material-icons">arrow_drop_down</i></a>
                        <a onClick={(e) => props.Delete(props.num)} > <i className="material-icons">delete_forever</i></a>
                    </div>
                </div>
            </li>
        </div>
    )

}

export default QuestionItem

