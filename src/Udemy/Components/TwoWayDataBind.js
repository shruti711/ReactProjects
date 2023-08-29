//  Challenge: User should be able to type in any 
// characters on input and those character should show in the browser.

import {useState, Fragment} from 'react';

function UserInput() {
    const[value, setValue] = useState("")

    return(
        <Fragment>
        <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
        <p>{value}</p>
        </Fragment>
    )
}

export default UserInput;