 import React from 'react';
import {withRouter} from 'react-router-dom';

 function LinkButton (props){
     console.log(props);
    return <button {...props} />
}

export default withRouter(LinkButton);