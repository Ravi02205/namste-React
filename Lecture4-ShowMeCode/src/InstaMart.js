import React, { useState } from 'react'


const Section = ({ name, description, isVisible, setIsVisible }) => {
    return (
        <div className="border border-black p-4">
            <div className='flex'>
                {isVisible ?
                    <button className="rotate-90" onClick={() => setIsVisible(false)}> &#10148; </button>
                    :
                    <button onClick={() => { setIsVisible(true) }}> &#10148; </button>
                }
                <h1 className='text-xl font-bold'>{name}</h1>
            </div>
            {isVisible && <p>{description}</p>}
        </div>
    );
};

const InstaMart = () => {
    const [visibleSection, setVisibleSection] = useState("");
    return (
        <div className='p-2 m-2'>
            <h1 className='text-2xl font-bold mb-3'>Instamart</h1>
            <Section
                name="About Instamart"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                isVisible={visibleSection == "about"}
                setIsVisible={(flag) => { setVisibleSection(flag ? "about" : "") }}
            />
            <Section
                name="Team Instamart"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                isVisible={visibleSection == "team"}
                setIsVisible={(flag) => { setVisibleSection(flag ? "team" : "") }}
            />
            <Section
                name="Product"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                isVisible={visibleSection == "product"}
                setIsVisible={(flag) => { setVisibleSection(flag ? "product" : "") }}
            />
        </div>
    )
}

export default InstaMart;
