import React from 'react';
import HW1 from './hw/1-simple';
import HW2 from './hw/2-input';


export default function(){
    return(
    <div>
        <h2>MinMax Simple</h2>
        <HW1 min={1} max={10}/>
        <h2>MinMax input</h2>
        <HW2 min={1} max={10}/>
    </div>

    );
}