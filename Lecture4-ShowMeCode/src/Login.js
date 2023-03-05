import { useFormik } from "formik";
import { Link } from 'react-router-dom';
const Login = () => {
    let formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <>
            <div className="form-container">
                <form onSubmit={formik.handleSubmit} className="form">
                    <div className="form-item">
                        <label htmlFor="email">Email Address : </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password : </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Login;