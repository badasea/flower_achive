import PostsGrid from "./components/PostsGrid";
import ProfileHeader from "./components/ProfileHeader";


export default function ProfilePage() {
  const posts = [{
    id: 0,
    src: '',
    likes: 1,
    comments: 1
  }];

  return (
    <main className="bg-white min-h-screen">
      <ProfileHeader />
      <PostsGrid posts={posts} />
    </main>
  );
}