import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAT_odj11b1if19o5jdry7R1Fqm8Le4CCQ",
  authDomain: "react-auth-dev-fba38.firebaseapp.com",
  projectId: "react-auth-dev-fba38",
  storageBucket: "react-auth-dev-fba38.appspot.com",
  messagingSenderId: "358524462393",
  appId: "1:358524462393:web:82ab554082178e846e74e8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
