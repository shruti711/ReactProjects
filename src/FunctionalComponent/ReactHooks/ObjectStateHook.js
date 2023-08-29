import { useState } from "react";

function ObjectStateHook() {
const[name, setName] = useState({firstName: "", lastName: ""})
    return(
    <div>
        <form>
            {/* use spread operator to take all the value(firstname lastname)...name */}
            <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}/>
            <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value })}/>
        <h2>{name.firstName} {name.lastName}</h2>
        <h3>Your first name - {name.firstName} </h3>
        <h3>Your last name - {name.lastName} </h3>
        <h2>{JSON.stringify(name)}</h2>
        </form>
    </div>
)
}

export default ObjectStateHook;