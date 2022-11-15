import { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { darkMode } from "./Context/DarkContext";
import router from "./Routes/Router";


function App() {
  const {dark} = useContext(darkMode)
  return (
    <div className={`duration-500 ${dark ? 'text-white bg-black' : 'text-black bg-white'}`}>
     <div className="max-w-[1440px] mx-auto">
     <RouterProvider router={router}></RouterProvider>
     </div>
    </div>
  );
}

export default App;
