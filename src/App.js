
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import CollectionOfCards from "./CollectionOfCards";
import NewBook from "./NewBook";
import BookDetails from "./BooksDetails";
import NavBar from "./NavBar";
import Login from "./Login";
import SignUp from "./Signup";
import About from "./About";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<CollectionOfCards />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/newbook" element={<NewBook />} />
      </Routes>
    </div>
  );
}

export default App;