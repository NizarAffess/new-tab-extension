import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './BookmarkForm.css';
import { AiFillCloseCircle } from 'react-icons/ai';

const BookmarkForm = (props) => {
  const [bmTitle, setBmTitle] = useState('');
  const [bmLink, setBmLink] = useState('');
  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBookmark({ id: uuidv4(), bmTitle: bmTitle, bmLink: bmLink })
  }

  const closeFormHandler = () => {
    props.closeForm()
  }

  useEffect(() => {
    titleRef.current.focus();
  }, [])

  return (
    <section className="bookmark-form">
      <div className="card">
        <form
          onSubmit={handleSubmit}
        >
          <div className="form-control">
            <label htmlFor="">
              Title
            </label>
            <input
              id="bmTitle"
              type="text"
              onChange={e => setBmTitle(e.target.value)}
              ref={titleRef}
            />
          </div>
          <div className="form-control">
            <label htmlFor="">
              URL
            </label>
            <input
              id="bmLink"
              type="text"
              onChange={e => setBmLink(e.target.value)}
            />
          </div>
          <button
            className="btn-cancel"
            onClick={closeFormHandler}
          >
            Cancel
          </button>
          <button
            className="btn-add"
            type="submit"
          >
            Add Bookmark
          </button>
        </form>
        <button
          className="btn-close"
          onClick={closeFormHandler}
        >
          <AiFillCloseCircle />
        </button>
      </div>
    </section>
  );
}

export default React.memo(BookmarkForm);