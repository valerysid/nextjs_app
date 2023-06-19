import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import GridWrapper from '../components/Layout/GridWrapper';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn } = useUserAuth();


    const { logOut, user } = useUserAuth();
    const handleLogout = async () => {
        try {
            await logOut();
            //   navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            //navigate to somewhere?
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <main>
            <GridWrapper className={'flex justify-center items-center'}>

                <div className="w-full mt-36 max-w-[400px] md:w-6/12 rounded-[25px] bg-gradient-to-tl from-[#300238] to-[#5B3562] p-4">

                    <h2 className="mb-4 font-trap text-center text-2xl">Firebase Auth Login</h2>

                    {error && <h2 className="text-lg text-red">{error}</h2>}

                    <form className="w-full" onSubmit={handleSubmit}>

                            <input
                            autoComplete={false}
                                type="email"
                            className="bg-medium-grey p-2 w-full shadow-inner border border-border-color-light rounded-lg"
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            autoComplete={false}
                                type="password"
                            className="bg-medium-grey my-3 p-2 w-full shadow-inner border border-border-color-light rounded-lg"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />


                        <div className="flex justify-center">
                            <button className="rounded-full mx-auto border border-border-color-light px-6 py-3 text-lg" variant="primary" type="Submit">
                                Log In
                            </button>
                        </div>
                    </form>

                </div>
            </GridWrapper>
        </main>
    );
};

export default Login;
 