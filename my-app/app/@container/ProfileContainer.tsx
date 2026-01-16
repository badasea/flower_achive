import PostsGrid from "../@components/PostsGrid";
import ProfileHeader from "../@components/ProfileHeader";
import { posts } from "../@constant/post";


export default function ProfilePage() {

  return (
    <main className="bg-white min-h-screen">
      <ProfileHeader />
      <PostsGrid posts={posts} />
    </main>
  );
}