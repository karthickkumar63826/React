function Search({ onSearch }) {
  return (
    <>
      <div>
        <h3>Search</h3>
        <input type="text" onChange={(e) => onSearch(e.target.value)}></input>
      </div>
    </>
  );
}

export default Search;
