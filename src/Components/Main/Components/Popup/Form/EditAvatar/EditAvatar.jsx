export default function EditAvatar() {
  return (
    <>
      <label className="form__field">
        <input
          type="url"
          placeholder="Image URL"
          name="image"
          className="form__input"
          id="avatar"
          pattern="https://.*"
          required
        />
        <span className="form__input-error avatar-error"></span>
      </label>
      <button type="submit" className="form__button" id="form__button">
        Save
      </button>
    </>
  );
}
