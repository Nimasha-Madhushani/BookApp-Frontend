import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import BookDetails from "./components/Book/BookDetails";
import About from "./components/About";

import MultiNew from "./components/MultiSelect/MultiNew";

function App() {
  return (
    <div>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/add" element={<AddBook />} exact />
            <Route path="/books" element={<Books />} exact />
            <Route path="/about" element={<About />} exact />
            <Route path="/books/:bookId" element={<BookDetails />} exact />
            <Route path="/multi" element={<MultiNew />} exact />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
