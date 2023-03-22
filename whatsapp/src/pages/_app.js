import "@/styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useEffect } from "react";

import { auth, db } from "../../firebase";
import login from "./Login";
import Login from "./Login";
export default function App({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set(
        {
          email: user.email,
          lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
          photoURL: user.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loading />;
  if (!user) return <Login />;
  return <Component {...pageProps} />;
}
