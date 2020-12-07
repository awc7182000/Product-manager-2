import React from 'react'
import {Link} from '@reach/router'
import Axios from 'axios';
export default props => {
const{removeFromDom} = props;
const deletePerson = (personId) => {
    Axios.delete('http://localhost:8000/api/people/'+ personId)
        .then(res => {
            removeFromDom(personId)
        })
}
    return (
        <div>
            {props.people.map((person, idx) => {
                return <p key={idx}>
                    <Link to={"/" + person._id}>
                        {person.title}
                    </Link>
                    
                    <button onClick={(e)=>{deletePerson(person._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}
