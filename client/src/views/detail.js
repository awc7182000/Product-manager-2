import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link} from '@reach/router'
export default props => {
    const [person, setPerson] = useState({})
    const deletePerson1 = (personId) => {
        axios.delete('http://localhost:8000/api/people/'+ personId)}
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson({
                ...res.data
            }))
    }, [])
    return (
        <div>
            <p>Title: {person.title}</p>
            <p>Price: {person.price}</p>
            <p>Description: {person.description}</p>
            <Link to ={ "/" + person._id + "/edit"}>Edit</Link><br />
            <button>
                <Link to={ "/people/"}onClick = {(e) => {deletePerson1(person._id)}}>Delete</Link>
            </button>
        </div>
    )
}
