import { posts } from "@/app/@constant/post";
import FeedForm from "../@components/FeedForm";

function FeedContainer() {
  return (
    <FeedForm posts={posts} />
  );
}

export default FeedContainer