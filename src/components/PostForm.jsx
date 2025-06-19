import { useState } from "react";

function PostForm({ addPost }) {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '' && !image) return;
    
    setIsSubmitting(true);
    addPost({ text, image });
    
    setTimeout(() => {
      setText('');
      setImage(null);
      setIsSubmitting(false);
    }, 500);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB');
      return;
    }
    setImage(file ? URL.createObjectURL(file) : null);
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <textarea
        placeholder="What's on your mind..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        className="post-input"
      />
      <div className="image-preview">
        {image && (
          <img 
            src={image} 
            alt="Preview" 
            className="preview-image"
          />
        )}
      </div>
      <div className="form-actions">
        <label className="file-upload">
          <input 
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          Choose Image
        </label>
        <button 
          type="submit" 
          disabled={isSubmitting || (text.trim() === '' && !image)}
          className="submit-btn"
        >
          {isSubmitting ? 'Posting...' : 'Post'}
        </button>
      </div>
    </form>
  );
}

export default PostForm;