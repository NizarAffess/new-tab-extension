import './Bookmark.css';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Bookmark = ({ bm, deleteBookmark }) => {
  return (
    <li
      className="bm-item"
    >
      <a href={bm.bmLink}>
        <img
          src={"https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" + bm.bmLink + "&size=24"}
          alt=""
          className="image"
        />
        <span className="bm-title">
          {bm.bmTitle}
        </span>
      </a>
      <RiDeleteBin6Line
        className="btn-delete"
        onClick={() => deleteBookmark(bm.id)}
      />
    </li>
  );
}

export default Bookmark;