import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function BookForm() {
  const initialValue = { id: "", title: "", price: "", author: "" };
  let [book, setBook] = useState(initialValue);
  let [books, setBooks] = useState([]);
  let [isEditable, setIsEditable] = useState(false);

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
    console.log(book);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEditable) {
      book.id = uuidv4();
      books.push(book);
      setBooks([...books]);
      console.log(book);
    } else {
      books.map((b) => {
        if (b.id === book.id) {
          b.title = book.title;
          b.price = book.price;
          b.author = book.author;
          return b;
        } else return b;
      });

      setBooks([...books]);
      setIsEditable(false);
    }
    setBook(initialValue);
  };

  const handleReset = () => {
    setBook(initialValue);
  };

  const removeBook = (id) => {
    let filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  const handleEdit = (b) => {
    setBook(b);
    setIsEditable(true);
  };

  return (
    <>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Book Title</label>
        <input
          type="text"
          value={book.title}
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="title">Book Price</label>
        <input
          type="text"
          value={book.price}
          name="price"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <label htmlFor="title">Author</label>
        <input
          type="text"
          value={book.author}
          name="author"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <button type="submit">Submit</button>
        <button type="reset" onClick={() => handleReset()}>
          Reset
        </button>
      </form>

      <table className="tabel tabel-bordered">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Author</th>
        </tr>
        {books.map((b) => (
          <tr key={b.id}>
            <td>{b.id}</td>
            <td>{b.title}</td>
            <td>{b.price}</td>
            <td>{b.author}</td>
            <td>
              <button onClick={() => removeBook(b.id)}>Delete</button>
            </td>
            <td>
              <button onClick={() => handleEdit(b)}>Edit</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}
