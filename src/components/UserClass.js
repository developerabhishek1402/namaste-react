import React from "react"
import { Link } from "react-router-dom";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                login : "Test",
                public_repos : 0,
                avatar_url : "test",
                url : 'Test'
            },
            count : 1
        }
    }

    async componentDidMount(){


        const data = await fetch("https://api.github.com/users/developerabhishek1402");

        const json = await data.json()
        console.log(json)
        this.setState({
            userInfo : json
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps, prevState)
        console.log("API called and component updated")
    }

    render(){

        const {login, public_repos, avatar_url, html_url} = this.state.userInfo
        

        return (
            <div className="user-card">
                <h2>{this.state.count}</h2>
                <button onClick={() => {
                    this.setState({
                        count : this.state.count  +1
                    })
                }}>Click</button>
                <img src={avatar_url} />               
                <h2>Name : {login}</h2>
                <h4>Public Repos : {public_repos}</h4>
                <h5>Github Url : <Link to={html_url} target="_blank">{html_url}</Link></h5>
                
            </div>
        )
    }
}

export default UserClass;