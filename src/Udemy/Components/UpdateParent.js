import {useState, Fragment} from 'react';

function Child( { setValue }){
    return(
    <Fragment>
    <div>Child</div>
    <button onClick={() => setValue("Parent Component has been updated")}> Child Component </button>
    </Fragment>
    )
}

function UpdateParent(){
    const[value, setValue] =  useState("I need to be updated from my child");

    return( 
    <Fragment>
        <div>Parent Component</div>
        <div>{value}</div>
        <Child setValue={setValue}/>
    </Fragment>
    )
}

export default UpdateParent;