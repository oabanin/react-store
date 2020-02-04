import React from 'react';
import PropTypes from 'prop-types';

import AppMinMax from '~c/inputs/minmax';


import {Link} from 'react-router-dom';
import {routesMap} from '~/routes';




export default  class extends React.Component {
 
    render() {
        //     let productRows = [].products.map((product, i) => {
        //     return (
        //         <tr key={product.id}>
        //             <td>{product.title}</td>
        //             <td>{product.price}</td>
        //             <td><AppMinMax
        //                 min={1}
        //                 max={product.rest}
        //                 cnt={product.current}
        //                 onChange={[].changeOn[i]} />
        //             </td>
        //             <td>{product.price * product.current}</td>
        //             <td>
        //                 <button onClick={(e) => [].remove(i)}>
        //                     X
        //                 </button>
        //             </td>

        //         </tr>
        //     )
        // });



        return (

            <div>
                <h3>Cart</h3>
                <table className="border table-bordered">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                      
                    </tbody>
                </table>
                Total - {2}
                <hr />
                <button className="btn btn-primary">NExt PAge</button>
                <Link className="btn btn-primary" to={routesMap.order}>Send</Link>
            </div>
        );


    }
}
