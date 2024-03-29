import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import auth from "./firebase/firebase.config";
import { getUser, toggleLoading } from "./features/auth/authSlice";

function App() {
  // console.log(process.env)
  // const { isLoading } = useSelector((state) => state.auth);
  // console.log(isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(getUser(user.email));
      } else {
        dispatch(toggleLoading());
      }
    });
  }, [dispatch]);
  return (
    <>
      <Toaster />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
