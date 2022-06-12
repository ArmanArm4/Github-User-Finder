import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar.js";
import { SearchProvider } from "./Context/SearchContext";
import { UserProvider } from "./Context/UserContext";
import Home from "./pages/Home.js";
import Arman from "./pages/Arman";
import About from "./pages/About";
import User from "./pages/User.js";
import NotFound from "./pages/NotFound.js";

function App() {
  return (
    <SearchProvider>
      <UserProvider>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/about/arman" element={<Arman />}></Route>
          <Route path="/user/:link" element={<User />}></Route>
          <Route path="/notfound" element={<NotFound />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </UserProvider>
    </SearchProvider>
  );
}

export default App;
