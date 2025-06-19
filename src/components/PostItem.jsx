function PostItem({ text, image, date, onDelete }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <span className="post-date">{date}</span>
        <button onClick={onDelete} className="delete-btn">×</button>
      </div>
      <p className="post-text">{text}</p>
      {image && (
        <div className="post-image-container">
          <img 
            src={image}
            alt="Post content"
            className="post-image"
          />
        </div>
      )}
    </div>
  );
}

export default PostItem;