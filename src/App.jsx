import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Popup from './Components/Main/Popup/Popup';

function App() {
  return (
    <div className="content-wrapper">
      <Header />
      <Main />
      <Footer />
      <Popup title="test">
        <label className="form__field">
          <input
            type="text"
            placeholder="Title"
            name="title"
            className="form__input form__input-name"
            id="title"
            required
            minlength="2"
            maxlength="40"
          />
          <span className="form__input-error title-error"></span>
        </label>
        <label className="form__field">
          <input
            type="url"
            placeholder="Image URL"
            name="image"
            className="form__input"
            id="imageUrl"
            pattern="https://.*"
            required
          />
          <span className="form__input-error imageUrl-error"></span>
        </label>
        <button type="submit" className="form__button" id="form__button">
          Save
        </button>
      </Popup>
    </div>
  );
}

export default App;
