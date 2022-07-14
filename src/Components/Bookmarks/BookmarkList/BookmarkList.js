import Bookmark from "../Bookmark/Bookmark";
import './BookmarkList.css';

const BookmarkList = ({ bookmarks, deleteBookmark, openForm }) => {
  return (
    <section className="bookmark-list">
      <header>
        <h3>Bookmarks</h3>
        <button
          className="btn-control btn-add"
          onClick={openForm}
        >
          Add New +
        </button>
      </header>
      <div className="bms-container">
        <ul className="bms-list">
          {
            bookmarks.map(bm => (
              <Bookmark
                key={bm.id}
                bm={bm}
                deleteBookmark={deleteBookmark}
              />
            ))
          }
        </ul>
      </div>
    </section>
  );
}

export default BookmarkList;