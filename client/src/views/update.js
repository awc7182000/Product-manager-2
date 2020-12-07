import React, {useEffect,useState} from 'react'
import{navigate} from '@reach/router'
import axios from 'axios';
import PersonForm from '../components/personform'
export default props => {
    const{id} = props;
    const [person,setPerson] = useState();
    const [loaded,setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' +id)
            .then(res =>  {
                setPerson(res.data);
                setLoaded(true);
            })
    },[])
    const updatePerson = p => {
        
        axios.put('http://localhost:8000/api/people/' + id, p )
            .then(res =>{ console.log(res)
            navigate("/people/")});
    }
    
    return(
        <div>
            <h1>Update a Person</h1>
            {loaded && (
    <PersonForm 
        onSubmitProp={updatePerson}
        initialTitle={person.title}
        initialPrice={person.price}
        initialDescription ={person.description}
    />
)}
        </div>
    )
}