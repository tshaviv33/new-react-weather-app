export default function CitySearch() {
  return (
    <form className="CitySearch d-flex mt-3 mb-3">
      <input
        type="search"
        placeholder="Enter a city..."
        className="form-control me-2"
      />
      <button type="submit" className="btn btn-warning">
        Search
      </button>
    </form>
  );
}
