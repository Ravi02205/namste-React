Jsx ==> Jsx expression ==> help us to write HTML Like markup in js file 
    JSX and React are two separate things. They’re often used together, but you can use them independently of each other. JSX is a syntax extension, while React is a JavaScript library.
    JSX element is just syntactic sugar for calling React.createElement(component, props, ...children).
The Rules of JSX 
1. Return a single root element 
    you can write <> and </> and wrap and return 
    This empty tag is called a Fragment. Fragments let you group things without leaving any trace in the browser HTML tree.
    Question : Why do multiple JSX tags need to be wrapped?
         ans : JSX is look a Like HTML. but in the end it is object and you cant return two objects from a function without wrapping it into an array. 
2. Close all the tags 
    JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.
3. camelCase all most of the things! 
    JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class
    For historical reasons, aria-* and data-* attributes are written as in HTML with dashes.

JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place.
JSX is a special way of writing JavaScript. That means it’s possible to use JavaScript inside it—with curly braces { }
Question : Where to use curly braces ?
Ans : 
        1.As text directly inside a JSX tag: <h1>{name}'s To Do List</h1> works, but <{tag}>Gregorio Y. Zara's To Do List</{tag}> will not.
        2.As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}".
    
Using “double curlies”: CSS and other objects in JSX -->
    inline style for particular tag we need to pass an object inthe style attribute so first curly brace is for representing Js and other one is and object curly brace.
     <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
    {{ and }} in JSX, know that it’s nothing more than an object inside the JSX curlies!

Using Dot Notation for JSX Type
    You can also refer to a React component using dot-notation from within JSX. This is convenient if you have a single module that exports many React components. For example, if MyComponents.DatePicker is a component, you can use it directly from JSX with:

        import React from 'react';

        const MyComponents = {
        DatePicker: function DatePicker(props) {
            return <div>Imagine a {props.color} datepicker here.</div>;
        }
        }

        function BlueDatePicker() {
        return <MyComponents.DatePicker color="blue" />;
        }

https://reactjs.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime

