import React, { useState } from 'react';

const Tabs = ({ tabItems }) => {
    // Declaring state
    const [activeTab, setActiveTab] = useState(0);

    const onTabClicked = (index)=>{
        setActiveTab(index);
    }

    return (
        <div className="">
            <div class="ui top attached tabular menu">
                {tabItems.map((item, index) => {
                    const active = index === activeTab ? 'active' : '';

                    return (
                        <div
                            key={index}
                            className={`item ${active}`}
                            onClick={() => onTabClicked(index)}
                        >{item.title}</div>
                    )
                })}
            </div>
            {tabItems.map((item, index) => {
                const active = index === activeTab ? 'active' : '' ;

                return (
                    <div key={index} class={`ui bottom attached tab segment ${active}`} >
                        <p>{item.content}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Tabs;