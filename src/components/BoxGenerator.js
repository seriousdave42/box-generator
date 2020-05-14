import React, { useState } from 'react';

const BoxGenerator = props => {
    const [ formState, setFormState ] = useState({
        color: '',
        size: 0,
        boxList: []
    })
    
    const onChangeHandler = e => {
        e.preventDefault();
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        setFormState(prevState => {return{
            color: '',
            size: 0,
            boxList: [...prevState.boxList, {boxColor: formState.color, boxSize: formState.size.toString()+'px'}],
        }});
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>Color</label>
                <input type="text" name="color" value={formState.color} onChange={onChangeHandler}/>
                <br></br>
                <label>Size</label>
                <input type="number" name="size" value={formState.size} onChange={onChangeHandler}/>
                <input type="submit" value="Add"></input>
            </form>
            <div style={{display: "flex", flexFlow: "row", flexWrap: "wrap"}}>
                {formState.boxList.map((box, i) => <div key={i} style={{height: box.boxSize, width: box.boxSize, margin: "20px", backgroundColor: box.boxColor}}></div>)}
            </div>
        </div>
    );
}

export default BoxGenerator;