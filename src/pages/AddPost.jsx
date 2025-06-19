import PostForm from "../components/PostForm";

function AddPost({ addPost }) {
  return (
    <div className="add-post-container">
      <h2>Create New Post</h2>
      <PostForm addPost={addPost} />
    </div>
  );
}

export default AddPost;