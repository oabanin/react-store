import React from 'react';
import CounterClass from './counters/class';
import CounterFunction from './counters/function';


export default function(){
    return(
    <div>
        <h2>Counter As Class</h2>
        <CounterClass/>
        <h2>Counter As Function</h2>
        <CounterFunction/>
    </div>

    );
}