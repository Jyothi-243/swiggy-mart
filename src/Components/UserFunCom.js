import { useState } from "react";

const UserFunCom = () => {
    const [count] = useState(0);

    return (
        <div className="user-info">
            <h1>Name : Jyothi Sai Priya (function-based component)</h1>
            <h3>Location : Bengaluru</h3>
            <h3>Contact : jyothisaipriya63@gmail.com</h3>
            Count = {count}
        </div>
    )

}

export default UserFunCom;