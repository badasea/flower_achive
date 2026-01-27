export interface Detail {
  id: number;
  src: string[];
  likes: number;
  comments: number;
  type?: 'feed' | 'reel' | 'tagged';
}