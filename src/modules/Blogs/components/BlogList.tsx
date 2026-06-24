import BlogCard from "./BlogCard";
import BlogSkeleton from "./BlogSkeleton";
import type { BlogPost } from "../data/mockBlogs";

interface BlogListProps {
  isLoading: boolean;
  posts: BlogPost[];
}

export default function BlogList({ isLoading, posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {isLoading
        ? // Render 6 skeletons during loading
          Array.from({ length: 6 }).map((_, i) => <BlogSkeleton key={i} />)
        : // Render actual blog posts
          posts.map((post) => <BlogCard key={post.id} post={post} />)}
    </div>
  );
}
