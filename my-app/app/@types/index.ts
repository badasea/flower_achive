export interface Post {
  id: number;
  src: string;
  likes: number;
  comments: number;
  type?: 'feed' | 'reel' | 'tagged';
}