import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebaseConfig";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const LoginComponent = () => {
  const signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user.uid);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={signInWithGoogle} className="w-25">
        <legend>
          <h4 style={{ textAlign: "center" }}>Login</h4>
        </legend>
        <div className="d-flex justify-content-center">
          <button className="btn btn-light" type="submit">
            Sign in or Sign up with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
