// import { useState, useEffect } from "react";
// import MemoComponent from "./Purecomponent";
// import RegComponent from "./RegComponent";
import StateHooks from '../FunctionalComponent/ReactHooks/StateHooks';
import HooksCounter from "./ReactHooks/HooksCounter";
import ObjectStateHook from "./ReactHooks/ObjectStateHook";
import ArrayStateHook from "./ReactHooks/ArrayStateHook";

function ParentComponents() {

// const[ name, setName] = useState('Shruti');

// useEffect(() => {
//     setInterval(() => {
//         setName('Shruti');
//       console.log('name', name);
//     }, 1000);
//   }, ['Shruti']);

    return (
        <div>

            {/* <MemoComponent name={name}/>
            <RegComponent name={name}/> */}

            <StateHooks />
            ***************************
            <HooksCounter />
            *********

            <ObjectStateHook />

            *************************
            <ArrayStateHook />

        </div>
    )
}

export default ParentComponents;