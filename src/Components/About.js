import React from 'react';
import UserClassCom from './UserClassCom';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            count:0,
            pre:"sdf",
        }
    }
    componentDidMount(){
    }

    render() {
        return (
            <div className='about-container'>
                <h1> About page </h1>
                <UserClassCom />

            </div>
        )
    }

}

export default About;