import PostList from "../components/PostList";
import './Home.css';

function Home({ posts, deletePost }) {
  return (
    <div className="home-container">
      <div className="welcome-banner">
        <h1>Welcome to the Wall Post of NITTE</h1>
        <p className="subtitle">Share your thoughts with the community</p>
      </div>
      
      {posts.length === 0 ? (
        <div className="empty-state">
          <p>No posts yet!</p>
          <p>Be the first to share something...</p>
        </div>
      ) : (
        <PostList posts={posts} deletePost={deletePost} />
      )}
    </div>
  );
}

export default Home;