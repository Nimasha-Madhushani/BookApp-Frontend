import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import BookDetails from "./components/Book/BookDetails";
import About from "./components/About";

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
            <Route path="/books/:bid" element={<BookDetails />} exact />
            {/* update book by bid,
             1)go tourl
              2)go to <BookDetails />
              3)component will fetch id from the database via the get request
              4)render all details
              me bid ekama BookDetails wlat tyenna oni const id = useParams().bid;
                */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
