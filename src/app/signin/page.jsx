"use client";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const router = useRouter();
    const handleLogin = async (e) => {
        e.preventDefault(); // Prevents the page from refreshing on submit
        try {
            await signInWithEmailAndPassword(email, password);
            console.log("User logged in!");
            setEmail('');
            setPassword('');
            setError('');
            router.push('/') // Clear any previous error
        } catch (err) {
            setError("Failed to login. Check your email and password.");
            console.error("Login error:", err);
        }
    };

    return (
        <div className="flex flex-col items-center bg-slate-500 h-[695px]">
            <div className="flex flex-col w-[500px] h-[340px] mt-[160px] items-center rounded-xl bg-white bg-opacity-50 shadow-black shadow-sm">
                <p className="mt-[30px] text-xl font-bold">Login</p>
                <form onSubmit={handleLogin} className="flex flex-col gap-5 mt-[30px] ">
                    <input
                        type="email"
                        placeholder="User Email"
                        className="w-[300px] py-2 pl-2 rounded-lg"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="py-2 pl-2 rounded-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="border-2 bg-black mt-6 text-white py-2 rounded-lg">
                        Submit
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
