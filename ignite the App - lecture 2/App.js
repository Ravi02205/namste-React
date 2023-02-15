import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

// let heading1 = React.createElement('h1',{className:'heading', key:'h1'},'Heading 1');
// let heading2 = React.createElement('h1', { className: 'heading', key: 'h2' }, 'Heading 2');
// let headingContainer = React.createElement('div', { id: 'container' }, [heading1,heading2]);

// console.log(heading1);

// let root=ReactDOM.createRoot(document.querySelector('#root'));

// root.render(headingContainer)

/***  React is coming from import and react is coming from node_modules ***/
/***  React.createElement is in react library we have export createElement in react.js ***/
/***  React.createElement ==> object ==> HTML(DOM)   ***/

// ------------------------------------------------------------------------//

/*
    <div class="header">
        <h1>Namste React</h1>
        <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Info</li>
        </ul>
    </div>
*/

// to create something like this based on React.createElement

// let headingContainer = React.createElement('div', { id: 'container' }, [
//     React.createElement('h1', { className: 'heading', key: 'h1' }, 'Namste react'),
//     React.createElement('ul', { key: 'ul'}, [
//         React.createElement('li', {  key: 'li1' }, 'about us'),
//         React.createElement('li', { key: 'li2' }, 'contact us'),
//         React.createElement('li', { key: 'li3' }, 'info')
//     ])
// ]);

// let root = ReactDOM.createRoot(document.querySelector('#root'));

// root.render(headingContainer)

// so this feels like a complex structure and this is even small but for whole page we can't use the CreateElement
// that is why we use the JSX

// what is JSX ? ->  "<h1>Hello Word</h1>" known as a JSX
// ------------------------------------------------------------------------//
// let headingContainer2 = <h1>Hello Word</h1>;
// let headingContainer = React.createElement('h1', { id: 'container' }, "namste React");
// let headingContainer = React.createElement('h1', { id: 'container' }, JSON.stringify(headingContainer2));


// let root = ReactDOM.createRoot(document.querySelector('#root'));

// root.render(headingContainer)

// alert(headingContainer2); // JAVASCRIPT OBJECT IT IS
// is JSX HTML inside JS ? NO never it is

// this syntexxt is called HTML LIKE SYNTax NOT HTML INSIDE JAVASCRIPT

// we do have a ID in hTml but react keeps track of KEy

// facebook Developers developed the JSX


// let headingContainer2 = <h1>Hello Word</h1>;
// this will be not understandable to Browser so who understand it and converts it
// Babel ==> babel is beast ==> go to github repo and read it out about babel
// babel is library which reads the code line by line and gives an output of that
// babel kind of creates the AST ==> abstract syntax tree
// babel checks word by word and sees < than it thinks it is JSX

// JSX ==> uses the React.createElement behind the scenes
// flow -> JSX ==> React.createElement ==> object ==> HTML(DOM)

// babel understand the JSX and convert into React.createElement and it return a object and it converted to HTML and it render in DOM.

// <h1>Hello Word</h1> -> JSX Expression

// the object JSX create it is known as a React Element

// ------------------------------------------------------------------------//

// let heading = <h1>Hello Word</h1>;

// let HeadingComponent = () => {
//     return <h1>React functional Component</h1>;
// }

// let HeadingComponent1 = () => <h1>React functional Component</h1>;

// // both are same

// let DummyComponent = () => {
//     return <div><h1>EHllo</h1><h1>EHllo</h1></div>;
// }
// let DummyComponent1 = () => {
//     return(
//     <div>
//         <h1>EHllo</h1>
//         <h1>EHllo</h1>
//     </div>
//     );
// }

// // () this is used when more than one line we are writing the code

// let root = ReactDOM.createRoot(document.querySelector('#root'));

// root.render(heading)


// any function that returns the React Element or JSX is known as a functional component

// ------------------------------------------------------------------------// 

let heading = <h1>Hello Word</h1>;

let Title = () => {
    return <h1>Hello React</h1>;
}
let Title2 = <h1>Hello React</h1>;

let HeadingComponent1 = () => <h1>React functional Component</h1>;

// both are same 

let DummyComponent = () => {
    return (
    <div>
        <Title/>
        {Title()}
        {Title2}
        <h1>EHllo</h1>
        <h1>EHllo</h1>
    </div>
    );
}

// {} in curly braces we can do anything 

let root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<DummyComponent/>)

// JSX sanitizes the js code and save our website from malicious attacks from hacker and JSX confirms that our app is safe and secure 

{/* <Title/> */}
// this is known as a component Composition.
// Component Composition ==> if we want to use the component inside a component is called component composition
