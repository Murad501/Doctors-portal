import React from 'react';

const CommonButton = ({children}) => {
    return <button className="btn bg-gradient-to-r from-primary to-secondary border-none text-white">{children}</button>

};

export default CommonButton;