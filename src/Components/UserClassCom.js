
import React from "react";
import { Component } from "react";

//creating the state variables and props inside the class-based components
//when we are loading the class-based components , then new instance will be called , means constructor will be called , this is the best place to create the state variables and receive the props
//this.state is the state component which will store all the state variables(big object which stores all the stats variables)
class UserClassCom extends Component {
    constructor(props) {
        super(props); // ✅ initialize parent constructor with props
        // console.log(props); // ✅ now you can safely use props here

        this.state = {
            name: "",
            image:"",
            location:"",
            
        }
    }
    //we usually make the api calls in the ComponentDidMount();  
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Jyothi-243");
        const json = await data.json();
        console.log("apiiiii data", json);
        this.setState({
            name:json?.name,
            image:json?.avatar_url,
            location:json?.location,
        })
    }

    render() {
        const {name, location, image}= this.state;
        // debugger;

        return (
            <div className="user-info">
                <h1>Name : {name} (class-based component)</h1>
                <h3>Location : {location}</h3>
                {image && <img src={image} alt= "profile picture" />}
            </div>
        );
    }
}

export default UserClassCom;
