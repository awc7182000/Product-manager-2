import React, { useEffect, useState } from 'react';

import axios from 'axios';

export default props => {
    const {initialTitle, initialPrice,initialDescription,onSubmitProp} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");  
    
    
    useEffect(() => {
        setTitle(initialTitle);
        setPrice(initialPrice);
        setDescription(initialDescription)
    },[])

    const onSubmitHandler = e =>{
        e.preventDefault();
        onSubmitProp({title,price,description});
        console.log(title,price,description);
}
return(
    <div>
    <form onSubmit={onSubmitHandler}>
        <p>
            <h1>Add a product!</h1>
            <label>Title</label>
            <input type="text" defaultValue = {initialTitle} onChange={e=>setTitle(e.target.value)} />
        </p>
        <p>
        <label>Price</label>
            <input type="text" defaultValue = {initialPrice}onChange={e=>setPrice(e.target.value)} />
        </p>
        <p>
        <label>Description</label>
            <input type="text" defaultValue = {initialDescription}onChange={e=>setDescription(e.target.value)} />
        </p>
        <input type="submit" value= "Add item" />
    </form>
    </div>
)
}