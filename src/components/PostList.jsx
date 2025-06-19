import PostItem from "./PostItem";

function PostList({ posts, deletePost }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          text={post.text}
          image={post.image}
          date={post.date}
          onDelete={() => deletePost(post.id)}
        />
      ))}
    </div>
  );
}

export default PostList;