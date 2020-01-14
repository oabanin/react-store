import React from 'react';
import styles from './app.module.css';
import router from '~s/router.js'


export default class extends React.Component {
    render() {
        return (
            <div className="container">
                <button onClick={()=> this.forceUpdate()}>Force Update</button>
                {router.component}
            </div>
        );
    }
}
 