let heading1 = React.createElement('h1', {}, 'Hello React!');
let heading2 = React.createElement('h1', {}, 'Hello React!');
let container = React.createElement('div', { className: 'headingContainer' }, [heading1, heading2]);

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container)