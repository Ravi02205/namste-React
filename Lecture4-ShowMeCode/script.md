is JSX manadatory for react ? 
==> Nope we can cretae and use elements as a react it self so there is no need.

is ES6 mandatory for react ?
==> NOpe we can use react and write syntax and run react without the ES6.

{TitleComponent} and {<TitleComponent/>} and {<TitleComponent></TitleComponent>} in JSX
==> {TitleComponent}
    -> it means TitleComponent=<h1></h1> and we are using it as a variable in react to get JSX
    {<TitleComponent/>} and {<TitleComponent></TitleComponent>}
    -> one way or another TitleComponent is functional component which returns some JSX and we are using it in functional Component

how can i write Comments in JSX?
==> suppose JSX is <h1></h1>
    to comment it {/* <h1></h1> */}

what is React.Fragment or <></>?
==> they both are equal --> we can use <React.Fragment></React.Fragment> 
    -> this are used for when functional component needs to return a multiple JSX 
        but as we know we can return only one component then 
        we wrap those elements in fragments so fragments will work as an empty jsx
        so we can use it.

what is virtual Dom ?
==> virtual DOM --> it is representation of Actual DOM.

what is reconciliation in React ?
==> it is the React use the Diff algorithm to Diff between the Trees (actual dom and virutal Dom)

What is react Fiber ?
==> it is the Reconciliation engine based on which whole reconciliation works

Why we need keys ? when do we need keys in react ?
==> if we have the same elements in children and if we add one more same children 
    --> react get confused because it doesnt know what is added and where it is added so 
    --> we use unique id as keys to let react know which is which element 

    --> we need keys when we have the same elements as a children 

can we use index as keys ?
==> we can but it is not a good practice.


what is the props ?
==> components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

--> Whether you declare a component as a function or a class, it must never modify its own props. Consider this sum function:
    function sum(a, b) {
         return a + b;
    }
    --> Such functions are called “pure” because they do not attempt to change their inputs, and always return  
        the same result for the same inputs

----> All React components must act like pure functions with respect to their props.

what is config driven UI ?
==> It is a very common & basic approach to interact with the User. A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.

reconcilation :
The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

 normally variables “disappear” when the function exits but state variables are preserved by React.