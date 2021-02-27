import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const ScrollToTopButton = (props) => {
    return (
        <div className="scroll-to-top" onClick={props.onClick}>
            <AiOutlineArrowUp />
        </div>
    );
}

export default ScrollToTopButton
