import React from 'react';
class Profile extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.name + "child Constructor")
        // this.state = {
        //     count: 0
        // }
        this.state = {
            count: 0,
            count2: 0
        }
    }

    // handleClick = function () {
    //     this.setState({ count: 1 })
    // }

    // handleClick = () => {
    //     this.setState({ count: 1 })
    // }

    handleClick = () => {
        this.setState({ count: 1, count2: 1 })
    }

    componentDidMount() {
        console.log(this.props.name + "child DIDMOUNT")
        this.timer = setInterval(() => {
            console.log('hello buddy ' + this.props.name + " child ")
        }, 1000)
    }

    componentDidUpdate() {
        console.log(this.props.name + "child DIDupdate")
    }

    componentWillUnmount() {
        // used to clear all the stuff like we are clearing here interval for the didmount timeout  
        console.log(this.props.name + "child WillUnmount")
        clearInterval(this.timer);
    }
    render() {
        console.log(this.props.name + "child Render")
        return (
            <>
                <h1>Child2</h1>
                <h1>react class based component</h1>
                <h2>name : {this.props.name}</h2>
                {/* we use this.props to access the prop ==> a object which is bind to this particular component */}
                {/* Single state */}
                {/* <p>count : {this.state.count}</p> */}
                {/* <button onClick={this.handleClick.bind(this)}>count</button> */}
                {/* Using normal function :-  if we dont bind this the callback function will be not binded with the profile class and setState will be undefined */}
                {/* <button onClick={this.handleClick}>count</button> */}
                {/* if we dont wanna bind this the callback function should be arrow function */}
                {/* Multiple  state */}
                <p>count : {this.state.count}</p>
                <p>count2 : {this.state.count2}</p>
                <button onClick={this.handleClick}>count</button>

            </>
        )
    }
}
export default Profile;