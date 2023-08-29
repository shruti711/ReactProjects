import { Fragment, useState } from 'react';

function DisableButton() {

    const[ value, setValue] = useState("")

    return(
        <Fragment>
            <input 
            type='text'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            <button disabled={value.length < 1} type="submit">Submit</button>
        </Fragment>
    )
}

export default DisableButton;