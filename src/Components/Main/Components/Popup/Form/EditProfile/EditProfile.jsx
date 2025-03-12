export default function EditProfile() {
  return (
    <>
      <label for="form__field">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form__input"
          id="name"
          required
          minlength="2"
          maxlength="40"
        />
        <span className="form__input-error name-error"></span>
      </label>
      <label for="form__field">
        <input
          type="text"
          placeholder="About me"
          name="aboutMe"
          className="form__input form__input-aboutMe"
          id="aboutMe"
          required
          minlength="2"
          maxlength="65"
        />
        <span className="form__input-error aboutMe-error"></span>
      </label>
      <button type="submit" className="form__button" id="form__button">
        Save
      </button>
    </>
  );
}

