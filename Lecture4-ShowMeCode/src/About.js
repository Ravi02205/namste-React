import React from 'react';
import { Outlet } from 'react-router-dom';
import Profile from './Profile';
import ProfileClass from './ProfileClass'

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        console.log("Parent constructor")
    }

    async componentDidMount() {

    }
        componentDidMount() {
        console.log("Parent componentDidMount")
    }
    render() {
        console.log("Parent render")
        return (
            <>
                <h1>About us</h1>
                <h2>Hello folkes </h2>
                {/* <Outlet /> */}
                {/* For state changes  */}
                {/* <br />
            <ProfileClass name="Ravi" />
            <br />
            <Profile name="Ravi" />
            <br /> */}
                <br />
                <ProfileClass name="first" />
                <br />
                {/* <ProfileClass name="second" />
                <br /> */}
            </>
        )
    }
}

// it will be always

/* 
    parent constructor
    parent render
        first child constructor 
        first child render 
        second child constructor 
        second child render 
        
        rendering phase completed 

        first child mount
        second child mount
    parent mount

    commit phase completed 

*/ 


// why because if mount will be called in the middle of render it will pause the rending process for neext child and after some time it will continue so that is why 

export default About;