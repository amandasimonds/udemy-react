import React from "react";

//the 1st argument is the component name, so it must start with a capital letter
//below is a regular function, not a component. it is a function that returns a functional component
const withClass = (WrappedComponent, className) => {
    //this purpose is adding a div with a class
    //curly braces mean is is a functional body
    //then I return a functional component. 
    return props => (
        <div className={className}>
            <WrappedComponent 
            //spread out the props object and redistribute as key values in the component being wrapped by withclass
            {...props}/>
        </div>
    )

};

export default withClass;