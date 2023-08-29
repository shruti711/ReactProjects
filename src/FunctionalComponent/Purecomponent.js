import React from "react";


function MemoComponent(name) {
    console.log('MemoComponent', name);
    return (
        <div>Pure Component</div>
    )
}

export default React.memo(MemoComponent);