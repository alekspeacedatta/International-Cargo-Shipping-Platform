import { type Address } from "./types/types";
const BASE_URL = 'http://localhost:5000';
export const register = async ( fullName: string, email: string, password: string, phone: string, addresses: Address[], role: string) => {
    try {
        const res = await fetch(`${BASE_URL}/api/auth/register/user`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                fullName: fullName,
                password: password,
                phone: phone,
                addresses: addresses,
                role: role
            })
        });
        if(!res.ok) throw new Error("Register Res Is Not Ok");
        const data = await res.json();
        localStorage.setItem("token", data.token);
    } catch (error) {
        console.error(error);
    }
}
export const login = async ( email: string, password: string ) => {
    try {
        const res = await fetch(`${BASE_URL}/api/auth/login/user`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Error: Login Res Is Not Ok");
        localStorage.setItem("token", data.token);
        return data; 
    } catch (error) {
        console.error(error);
        throw error;
    }
}