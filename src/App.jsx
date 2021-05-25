import React from "react";

const App = () => {

    const socks = [1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4];

    console.log(socks);

    socks.sort();

    console.log(socks);

    socks.sort((a, b) => {
        return a - b;
    });

    console.log(socks);

    let pairCount = 0;

    for (var i = 0; i < socks.length; i++) {
        if (socks[i] === socks[i + 1]) {
            pairCount++;
            i++;
        }
    }
    console.log(pairCount)

    return (<div>
        <h1>Array of Socks is: </h1>
        <div style={{ display: "flex" }}>

            {
                socks.map((arr) => {
                    return <h2>{arr}{","}</h2>
                })
            }

        </div>

        <h1>Number of pairs for every unique color are:</h1>

        <h2>{pairCount}</h2>

    </div>);
};

export default App;
