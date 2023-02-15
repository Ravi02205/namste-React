import React from 'react';
import ReactDom from 'react-dom/client';

// let heading3= React.createElement('h3',{},'heading3');
// let heading2= React.createElement('h2',{},['heading2',heading3]);
// let heading1 = React.createElement('h1', {}, ['heading1', heading2]);

// let container= React.createElement('div',{className:"title"},[heading1]);

// let container = (
// {/* <div className="title">
//     <h1>Heading1
//             <h2>
//             Heading2
//             <h3>Heading3</h3>
//             </h2>
//     </h1>
// </div> */}
// );

// let Heading = (props)=>{
//     return (<h1>{props?.Value}{props.children}</h1>);
// }
// let Container = ({Value1, Value2, Value3})=>{
//     return(
//         <div className="title">
//             <Heading Value={Value1}>
//                 <Heading Value={Value2}>
//                     <Heading Value={Value3}></Heading>
//                 </Heading>
//             </Heading>
//         </div>
//     );
// }

// root.render(<Container Value1="hello" Value2="hello" Value3="hello" />);



// ----------------------------------------------------------------------------------// 
let Logo = ({url})=>{
    return(
        <div className='LogoContainer'>
            <img src={url}></img>
        </div>
    );
};
let Search = ({buttonText})=>{
    return(
        <div className="searchContainer">
            <form>
                <input type="text"></input>
                <button type="submit"><i class="uil uil-search search-icon"></i></button>
            </form>
        </div>
    );
};
let UserIcon = ()=>{
    return(
        <div className='profile'>
            <i class="uil uil-user user-icon"></i>
        </div>
    );
};
let Header = ()=>{
    return(
        <div className="headerContainer">
        <div className="headerContainerWrapper">
            <Logo url="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg"/>
            <Search buttonText="Search"/>
            <UserIcon />
        </div>
        </div>
    );
}

let root=ReactDom.createRoot(document.getElementById('root'));
root.render(<Header />);