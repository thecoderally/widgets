import React, { useState } from 'react';
import Accordion from './Accordion';
import Tabs from './Tabs';

const App = () => {
    const DATA = [
        {title: "Title 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit lobortis felis, vel tempor ipsum. Sed a nibh non dolor ullamcorper sollicitudin et vel tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at ipsum vel eros tristique volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tempor et mi vel lobortis. Suspendisse potenti. Vestibulum a aliquam nibh. Duis placerat viverra sagittis. Integer dictum, lorem ut varius vehicula, mauris leo luctus felis, eu finibus eros dolor at diam. Ut facilisis felis ut diam luctus dapibus. Aliquam egestas orci erat, ac ornare orci placerat bibendum. Duis cursus sit amet orci vitae malesuada."},
        {title: "Title 2", content: "Nullam et magna commodo, faucibus lacus non, cursus metus. Fusce mollis leo at urna condimentum feugiat. Nulla ac velit lobortis, aliquet sapien in, dapibus ipsum. Suspendisse iaculis a augue at gravida. Sed dapibus porttitor odio, faucibus convallis metus faucibus eget. Nunc turpis eros, venenatis eu maximus eu, venenatis pulvinar ante. Vivamus ut dapibus felis. Praesent sem tortor, mattis et sem tempor, volutpat volutpat nibh. Cras dapibus sollicitudin diam ac pulvinar. Nullam elementum, ante eu volutpat posuere, nulla orci finibus nunc, a sollicitudin dui mi sed ex. Aenean eleifend non lacus eu dignissim. Nam lectus tellus, faucibus dignissim sollicitudin et, porta imperdiet ante. Sed tincidunt felis eu augue volutpat, ut efficitur nulla auctor."},
        {title: "Title 3", content: "Mauris convallis ultrices eros, ac sollicitudin justo suscipit non. Vivamus arcu erat, tincidunt in tristique eget, ultricies in risus. Duis cursus molestie ante et varius. Sed quis varius nisi. Nunc auctor rutrum lobortis. Aliquam in enim vitae est tristique cursus sed porttitor velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam quis libero vitae magna maximus malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a urna nunc. Donec nec sapien dictum eros vestibulum ultricies elementum ac massa. Donec vel elit dapibus, pulvinar neque ac, molestie orci."}
    ];

    return (
        <div className="main ui container">
            <div className="widget-container">
                <h2>Accordion</h2>
                <Accordion accordionItem={DATA} />
            </div>

            <div className="widget-container">
                <h2>Tabs</h2>
                <Tabs tabItems={DATA} />
            </div>
        </div>
    )
}

export default App;