import React from 'react';




import withStore from '~/hocs/withStore';

 class Result extends React.Component {
    
    render() {
        let cartModel = this.props.stores.cart;
        let formDataModel = this.props.stores.order;
        
        let lastOrderCache = this.props.stores.order.lastOrderCache;
        return (<div>
            <h2>Congratultaions</h2>
            Hi, {lastOrderCache.name},
            Total: {lastOrderCache.total}
  
        </div >
        );

    }
}

export default withStore(Result);
