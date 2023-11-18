import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routers/Router";
import "aos/dist/aos.css";
import Aos from "aos";
Aos.init();
function App() {
  return (
    <div className="bg-slate-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
