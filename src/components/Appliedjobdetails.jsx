import React from 'react';

const Appliedjobdetails = (props) => {
    const singlejob = props.singlejob;
    console.log(singlejob);

    const {id} = props.singlejob
    return (
        <div>
            <p>{id}</p>
            
        </div>
    );
};

export default Appliedjobdetails;