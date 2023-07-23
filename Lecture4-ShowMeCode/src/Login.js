import { useFormik } from "formik";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import userContext from "../utils/userContext";

const Login = () => {
    const { setUserData}=useContext(userContext);
    let formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        onSubmit: values => {
            setUserData(values);
        }
    })
    return (
        <>
            <div className="w-full h-[80vh] flex justify-center items-center">
                <form onSubmit={formik.handleSubmit} className="border border-slate-300 w-2/5 flex flex-col p-5 items-center rounded-lg">
                    <div className="w-full h-8 flex justify-between mb-2">
                        <label htmlFor="name">Name : </label>
                        <input
                            id="name"
                            name="name"
                            type="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            className="w-3/5 justify-self-end border border-slate-400 rounded-lg px-3"
                        />
                    </div>
                    <div className="w-full h-8 flex justify-between mb-2">
                        <label htmlFor="email">Email Address : </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            className="w-3/5 justify-self-end border border-slate-400 rounded-lg"
                        />
                    </div>
                    <div className="w-full h-8 flex justify-between mb-2">
                        <label htmlFor="password">Password : </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            className="w-3/5 justify-self-end border border-slate-400 rounded-lg"
                        />
                    </div>
                    <button type="submit" className="ml-4 px-4 bg-green-400 rounded-lg">Sign In</button>
                </form>
            </div>
        </>
    );
};

export default Login;