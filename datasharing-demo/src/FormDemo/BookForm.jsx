import { useState } from "react";

export default function BookForm() {
  const initialValue = { title: "", price: "", author: "" };
  let [book, setBook] = useState(initialValue);
  let [books, setBooks] = useState([]);

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
    console.log(book);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    books.push(book);
    setBooks([...books]);
    console.log(book);
  };

  const handleReset = () => {
    setBook(initialValue);
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
          <th>Title</th>
          <th>Price</th>
          <th>Author</th>
        </tr>
        {books.map((b) => (
          <tr>
            <td>{b.title}</td>
            <td>{b.price}</td>
            <td>{b.author}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
