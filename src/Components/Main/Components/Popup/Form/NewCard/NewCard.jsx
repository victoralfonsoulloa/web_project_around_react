export default function NewCard() {
  return (
    <>
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
    </>
  );
}
