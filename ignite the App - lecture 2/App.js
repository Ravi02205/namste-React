import React from 'react';
import ReactDOM from 'react-dom/client';

let heading1 = React.createElement('h1',{className:'heading'},'Heading 1');
let heading2 = React.createElement('h1', { className: 'heading' }, 'Heading 1');
let headingContainer = React.createElement('div', { id: 'container' }, [heading1,heading2]);

let root=ReactDOM.createRoot(document.querySelector('#root'));

root.render(headingContainer)