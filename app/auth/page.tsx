'use client';
import dynamic from "next/dynamic";
import { useState } from "react";

const Login = dynamic(() => import('../components/login'), { ssr: true });

export default function Page() {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    return (
        <div>
            {/* Other content */}
            <Login data={userData} />
        </div>
    );
}
