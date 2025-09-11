import React from 'react';
import UserClassCom from './UserClassCom';
import UserContext from '../utils/UserContext';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            pre: "sdf",
        }
    }
    componentDidMount() {
    }

    render() {
        return (
            <div className='about-container'>
                <h1> About page </h1>
                <div>loggedInuser : 
                    <UserContext.Consumer>
                        {(data) => data.loggedInuser}
                    </UserContext.Consumer ></div>
                <UserClassCom />
            </div>
        )
    }
} 

export default About;