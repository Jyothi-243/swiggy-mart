import { useRouteError } from "react-router-dom"; //to for the errors catching

const Error =() =>{
    const err = useRouteError();
    return (
        <div>
            <h1>Page not Found</h1>
            <h2>URL may be not correct re-check that</h2>
            <h2>{err.status} : {err.statusText}</h2>
        </div>
    )
}

export default Error;