import React, { useState } from 'react';

const Accordion = ({ accordionItem }) => {
    // Declaring state
    const [activeAccordion, setActiveAccordion] = useState(0);

    const onTitleClicked = (index) => {
        setActiveAccordion(index);
    }

    const renderItems = accordionItem.map((item, index) => {
        const isActive = index === activeAccordion ? 'active' : '';

        return (
            <React.Fragment key={index}>
                <div className={`title ${isActive}`} onClick={() => onTitleClicked(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${isActive}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    });


    return (
        <div className="ui styled accordion">
            {renderItems}
        </div>
    )
}

export default Accordion;