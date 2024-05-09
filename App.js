import React from "react";
import ReactDOM from "react-dom/client";

//React Element

// const heading = React.createElement("h1", {}, "Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX : Transpile before reaching to JS Engine - Parcel - Babel
const jsxheading = (
  <h1 className="hi" tabIndex={1}>
    This is JSX Heading
  </h1>
);


//Functional Components:

const HeadingCom = () => <h1>This is shorthand to write headingComponent</h1>;

const HeadingComponent = () => (
  <div>
  <h1>This is my functional components</h1>;
    <HeadingCom />
  </div>
)


//React Element

const spanTag = <span>This is a span tag</span>

const title = <h1>{spanTag}
This is title using React Element</h1>


const Tiitle = function () {
     return (
        <div>Hello</div>
    )
}

//React Functional Components using Component Composition

const Header = () => 
    (   
        <>
        <h2>This is a Header Component</h2>
        </>
    )


const Title = () => {
    return (
    <div>
    {title}
    <Header />
    <Tiitle />
    <Tiitle></Tiitle>
    {Header()}
    <h1>This is title using React Functional Component</h1>
    </div>
    )
}














root.render(<Title />);
