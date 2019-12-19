import React from 'react';

export default class extends React.Component{
 
    state = {
        cnt: 1
    }

    increase = () => {
        this.setState({
            cnt: this.state.cnt+1
        })
        console.log(this.state.cnt);
    }
     render(){
         return (
             <div>
                 <strong>{this.state.cnt}</strong>
                 <br/>
            <button onClick={this.increase}>+1</button>

             </div>
         );
     }
}