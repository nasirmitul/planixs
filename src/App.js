import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import './styles/style.css'

function App() {

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
