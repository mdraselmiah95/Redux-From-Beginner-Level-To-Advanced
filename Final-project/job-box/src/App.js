import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  // console.log(process.env) the nice head and book value =>
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
