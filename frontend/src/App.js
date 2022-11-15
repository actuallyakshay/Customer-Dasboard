import { Heading } from "@chakra-ui/react";
import AllRoutes from "./AllRoutes/AllRoutes";
import AdminPannel from "./Components/AdminPannel";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
