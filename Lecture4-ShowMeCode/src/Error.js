import { useRouteError } from "react-router-dom";
const Error = () => {
    let { status, error, statusText } = useRouteError();

    return (
        <>
            <h1> Opps!!!</h1>
            <h2> Error Code : {status}</h2>
            <h2> {statusText}</h2>
            {/* <h3> {error.message}</h3> */}
        </>
    )
}
export default Error;