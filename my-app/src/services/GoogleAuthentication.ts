import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../services/firebase';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

export const institutionalGoogleEmailLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const email = user.email;

        if(email?.endsWith('@neu.edu.ph')){
            const db = getFirestore();
            const userRef = doc(db, 'user', user.uid);
            const userDoc = await getDoc(userRef);

            const doesUserExist = userDoc.exists();

            if(!doesUserExist) {
                await setDoc(userRef, {
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    createdAt: new Date(),
                    role: 'Student'
                });
            }

            return user;
        } else {
            await signOut(auth);
            return { error: "Email used is not institutional email."};
        };
    } catch (error: any) {
        console.error("Error during sign-in:",  error);
        return { error: error.message };
    };
};