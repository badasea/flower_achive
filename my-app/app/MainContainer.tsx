import PostsGrid from "./components/PostsGrid";
import ProfileHeader from "./components/ProfileHeader";


export default function ProfilePage() {
  const posts = [{
        id: 0,
        src: "/flower_achive/vercel.svg",
        likes: 1,
        comments: 1
    },
    {
        id: 1,
        src: "/flower_achive/window.svg",
        likes: 1,
        comments: 1
    },
    {
        id: 2,
        src: "/flower_achive/file.svg",
        likes: 1,
        comments: 1
    },
    {
        id: 3,
        src: "/flower_achive/globe.svg",
        likes: 1,
        comments: 1
    }
];

  return (
    <main className="bg-white min-h-screen">
      <ProfileHeader />
      <PostsGrid posts={posts} />
    </main>
  );
}