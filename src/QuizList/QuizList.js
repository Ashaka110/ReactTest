import React, {useEffect, useState} from 'react';
import firebase from '../firebase'

import QuizCreateForm from './QuizCreateForm'
import QuizItem from './QuizItem'



const QuizList = () => {
    const [quizes, setQuizes] = useState([])

    useEffect(() =>{
        firebase.firestore().collection('Quizes').onSnapshot((snap)=>{
            const newQuizes = snap.docs.map((doc)=> ({
                id: doc.id,
                ...doc.data()
            }))
            
            setQuizes(newQuizes)
        })

    },[])


    return(
        <div>
        <div className = "card-panel">
            <div className="row center-align">
            <div className ="col s6 offset-s3">
                <label htmlFor="select">Sort By:</label>{' '}
                <select id ="select">
                    <option>Name (a-z)</option>
                    <option>Name (z-a)</option>
                    <option disabled>---</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                </select>
            </div>
            </div>
            <ol>
                {quizes.map((quiz) => 
                    <QuizItem doc={quiz} key={quiz.id}/>
                )}
            </ol>
        </div>
        </div>
    )
}

export default QuizList