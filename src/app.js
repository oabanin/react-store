import React from 'react';
import HW1 from './hw/1-simple';
import HW2 from './hw/2-input';
import HW3 from './hw/3-lazy';

export default function(){
    return(
    <div>
        <h2>MinMax Simple</h2>
        <HW1 min={1} max={10}/>
        <h2>MinMax input</h2>
        <HW2 min={-11} max={10}/>
        <h2>LAZY input</h2>
        <HW3 min={5} max={10}/>
    </div>

    );
}