
import "./styles/style.scss";
function SearchForm() {
  return (
    <div className="Search-form-container">
      <form className="form">
        <input
          type="search"
          name="search"
          id="search-inp"
          placeholder="Search for a Speciality, Doctor & Hospital..."
        />
        <button type="submit" className="btn">
          <img
            src="https://www.parkhospital.in/public/frontend/img2/Search_Icon.png"
            alt="  "
          />
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
