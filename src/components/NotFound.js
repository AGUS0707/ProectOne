/**
 * Created by Sherlock on 16.05.2021.
 */

import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="my-5 text-center">
            <img src="/images/404.png" alt=""/>

            <h3>Bunday sahifa mavjud emas!</h3>

            <Link to="/">Bosh sahifa</Link>
        </div>
    );
};

export default NotFound;