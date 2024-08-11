import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig/clientApp";

//Sign in with Google
export async function googleSignIn(e: any) {
    try {
        const provider = new GoogleAuthProvider();
        return await signInWithPopup(auth, provider);
    } catch (error) {
        console.error("Google Sign-In Error:", error);
        // Handle the error or show a message to the user
    }
} 

export async function logOut() {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Sign-Out Error:", error);
        // Handle the error or show a message to the user
    }
}

//user
export function useUser() {
    const [user, setUser] = useState<any | null>(null);

    useEffect(() => {
        return onAuthStateChanged(auth, (currentUser) => { setUser(currentUser); });
    },[]);

    return user;
}
