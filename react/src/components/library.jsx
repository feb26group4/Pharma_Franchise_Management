import { useState } from "react";

export default function FetchInfo() {

  const [bookid, setbookid] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  const fetchUser = () => {

    fetch("http://localhost:3000/books/" + bookid)

      .then((response) => {

        if (!response.ok) {
          throw new Error("Book not found");
        }

        return response.json();

      })

      .then((data) => {

        setUser(data);
        setMessage("");

      })

      .catch((error) => {

        setUser(null);
        setMessage(error.message);

      });

  };

  return (
    <>
      <h1>Book Information</h1>

      <label>Enter Book Id : </label>

      <input
        type="text"
        name="bookid"
        value={bookid}
        onChange={(e) => setbookid(e.target.value)}
      />

      <button onClick={fetchUser}>
        Fetch Book
      </button>

      <br />
      <br />

      {user && (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Book Id</th>
              <th>Title</th>
              <th>Publication</th>
              <th>Price</th>
              <th>ISBN</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{user.bookid}</td>
              <td>{user.title}</td>
              <td>{user.publication}</td>
              <td>{user.price}</td>
              <td>{user.isbn}</td>
            </tr>
          </tbody>
        </table>
      )}

      {message && (
        <h3 style={{ color: "red" }}>
          {message}
        </h3>
      )}
    </>
  );
}