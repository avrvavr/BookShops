import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BookList, BookMarks, BookPage, Cart, SearchResults, Header } from "./components/route";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<BookList/>}></Route>
        <Route path="/search" element={<SearchResults/>}></Route>
        <Route path="/bookmarks" element={<BookMarks/>}></Route>
       <Route path="/books/:id" element={<BookPage />}></Route>
        <Route path="cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
