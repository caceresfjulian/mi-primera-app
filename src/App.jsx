import { useEffect, useState } from "react";

const fetchBooks = ({ genre }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (genre === "drama") {
        console.log("Resolved");
        resolve(["Drama 1", "Drama 2", "Drama 3", "Drama 4", "Drama 5"]);
      } else if (genre === "horror") {
        resolve(["Horror 1", "Horror 2", "Horror 3", "Horror 4", "Horror 5"]);
      }
    }, 1000);
  });
};

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await fetchBooks({ genre: "drama" });
      setBooks(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <li>
      {isLoading && <span>LOADING...</span>}
      {!isLoading && books.map((book) => <span key={book}>{book}</span>)}
    </li>
  );
};

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn((l) => !l);
  };

  useEffect(() => {
    console.log("MOUNT");
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <button onClick={handleLogin}>Login</button>
      {isLoggedIn && <BookList />}
    </div>
  );
};

export default App;
