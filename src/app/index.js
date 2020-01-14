import React from 'react';
import styles from './app.module.css';
import router from '~s/router'
import {observer} from 'mobx-react'

export default @observer class extends React.Component {
    render() {
        return (
            <div className="container">
                {router.component}
            </div>
        );
    }
}
 