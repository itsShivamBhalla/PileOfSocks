import React, { useState } from 'react';
import './index.css';

const App = () => {

const [increment,setIncrement] = useState(0);

const ClickCount =()=>
{
    setIncrement(increment+1);  
};
    return (
        <>
        <h1>
        &nbsp;&nbsp;&nbsp;&nbsp;{increment}&nbsp;&nbsp;&nbsp;&nbsp;
        </h1>
        <button onClick={ClickCount}>Click ME</button>
        </>
    )
}

export default App;