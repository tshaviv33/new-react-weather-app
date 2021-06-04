export default function CitySearch() {
  return (
    <form className="CitySearch d-flex">
      <input
        type="search"
        placeholder="Enter a city..."
        className="form-control"
      />
      <button type="submit" className="btn btn-warning">
        Search
      </button>
    </form>
  );
}
