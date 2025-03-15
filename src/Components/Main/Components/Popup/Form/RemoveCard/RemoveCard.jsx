import React from 'react';

export default function RemoveCard({ onConfirm, onCancel }) {
  return (
    <>
      <button type="submit" className="form__button" id="form__button">
        Delete
      </button>
    </>
  );
}
