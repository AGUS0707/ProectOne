import React from 'react';

const Element = (props) => {

    console.log(props);

    return (
        <div className="card h-100">
            <div className="card-header">
                <h3>{props.title}</h3>
            </div>
            <div className="card-body">
                <img src={props.rasm} className="w-100" alt=""/>
                {props.text}
            </div>
        </div>
    );
};

export default Element;