import React from 'react'
import ReactDOM from 'react-dom/client'
// the above two lines are coming from the react and react-dom library which present in node modules folder not in CDN link.


const heading = React.createElement('h1', {
    id: 'title' // attribute
}, "Heading1");
const heading2 = React.createElement('h2', {
    id: 'title' // attribute 
}, "Heading2");
const container = React.createElement('div', {
    id: 'container' // attribute
}, [heading, heading2 ]); //when we want to multiple child then we need to pass an array. 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);

/**
 * HERE, we need to import the react and react-dom library. becuase we have commented the CDN link
 */