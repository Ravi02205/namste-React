import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './src/Body';
import Footer from './src/Footer';
import Header from './src/Header';
let App=()=>{
    return(
        <React.Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </React.Fragment>
    );
}
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);