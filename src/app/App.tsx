import { BrowserRouter } from "react-router-dom";
import RoutesApp from "../routes/RoutesApp";

function App() {
  return (
    <BrowserRouter>
      <div>
        <RoutesApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
