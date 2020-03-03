import React, {useEffect} from 'react'
import QuizList from './QuizList'
import QuizCreateForm from './QuizCreateForm'

function EditorPage(props){

    console.log(props);
    
    useEffect(()=>{
        console.log("Effect");
        const M = window.M;
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
    }, [] )


    return (
        <div className = "row">
            <h1> Quizzes {props.match.params.id}</h1>
            <div className="card col s4">
                <div className="card-content">
                    <QuizCreateForm />
                </div>
            </div>

            <div className="col s8">
                <QuizList/>
            </div>
        </div>
    )
}

export default EditorPage
