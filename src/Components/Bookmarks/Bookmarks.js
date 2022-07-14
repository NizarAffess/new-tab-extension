import { useEffect, useState } from "react";
import BookmarkForm from "./BookmarkForm/BookmarkForm";
import BookmarkList from "./BookmarkList/BookmarkList";
import './Bookmarks.css';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addBookmark = (bookmark) => {
    setBookmarks(prevBookmarks => [
      ...prevBookmarks,
      {
        id: bookmark.id,
        bmTitle: bookmark.bmTitle,
        bmLink: bookmark.bmLink,
      }
    ]);
    setShowForm(false);
  }

  // console.log(bookmarks);
  const deleteBookmark = (id) => {
    setBookmarks(prevBookmarks =>
      prevBookmarks.filter(bm => bm.id !== id));
    console.log(id);
  }

  const openForm = () => {
    setShowForm(true);
  }

  const closeForm = () => {
    setShowForm(false);
  }

  useEffect(() => {
    const json = localStorage.getItem("bookmarks");
    const loadedBookmarks = JSON.parse(json);
    if (loadedBookmarks) {
      setBookmarks(loadedBookmarks)
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(bookmarks);
    localStorage.setItem("bookmarks", json);
  }, [bookmarks])

  return (
    <div className="bookmarks">
      {
        showForm ?
          <div className="bookmarks-container">
            <div className="backdrop">
              <BookmarkForm
                addBookmark={addBookmark}
                closeForm={closeForm}
              />
            </div>
            <BookmarkList
              bookmarks={bookmarks}
              deleteBookmark={deleteBookmark}
              openForm={openForm}
            />
          </div>
          :
          <BookmarkList
            bookmarks={bookmarks}
            deleteBookmark={deleteBookmark}
            openForm={openForm}
          />
      }

    </div>
  );
}

export default Bookmarks;