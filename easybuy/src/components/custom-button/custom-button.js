import React from 'react';
import './custom-button.scss';

const CusomButton = ({children, ...otherProps}) => (
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
);

export default CusomButton;
