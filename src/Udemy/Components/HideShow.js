import {useState} from 'react';

function HideShow() {
    const[show, setShow] = useState(true)

    return(
        <>
        <button onClick={() => setShow(!show)}>{show ? "Hide text below" : "Show text below"}</button>
        {show && <div>Toggle Challenge</div>}
        </>
    )
}

export default HideShow;