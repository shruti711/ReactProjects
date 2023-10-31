import { Fragment, useState } from 'react';
import '../style.css';

const AddTwoNumber = (() => {

    const[firstNumber, setFirstNumber] = useState();
    const[secondNumber, setSecondNumber] = useState();
    const[total, setTotal] = useState(0);

    return(
        <Fragment>
            {/* +e.target.value it will conver string to number */}
            <input onChange={(e) => setFirstNumber(+e.target.value)} placeholder='Add first number' type='number'></input>
            <input onChange={(e) => setSecondNumber(+e.target.value)} placeholder='Add second number' type='number'></input>
            <button onClick={() => setTotal(firstNumber + secondNumber)}>Add</button>
            <p>Total: {total || ""}</p>
            ***************************
        </Fragment>
        )
})

export default AddTwoNumber;