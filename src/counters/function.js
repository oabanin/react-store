import React, { useState } from 'react';

export default function () {

    let [cnt, setCnt] = useState(0);
    let [randCnt, randSetCnt] = useState(3);

    let increase = () => {
        setCnt(cnt + 1);
        randSetCnt(Math.random());
    }

    return (
        <div>
            <strong>{cnt}</strong>
            <br />
            Random state: {randCnt}<br />
            <button onClick={increase}>+1</button>
        </div>
    );



}