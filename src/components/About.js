import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>This is about page</h1>
//       <h2>I am learning router</h2>
//       <UserClass name={"Abhishek from Class"} location={"Ahmedabad Class"} />
//     </div>
//   );
// };


class About extends React.Component{
  constructor(props){
    super(props)
    console.log("Parent constructir")
  }


  componentDidMount(){
    //To make api call we use component did mount
    console.log("Parent did mount")
  }

  render(){
    console.log("parent render")
    return (
      <div>
        <h1>This is about page</h1>
        <UserClass />
        <User />
      </div>
    )
  }
}

export default About;