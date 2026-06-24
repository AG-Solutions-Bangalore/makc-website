import { Skeleton } from "@/components/ui/skeleton";

export default function BlogSkeleton() {
  return (
    <article className="flex flex-col bg-bg-surface border border-border-main rounded-2xl overflow-hidden">
      {/* Image Skeleton */}
      <div className="relative aspect-video border-b border-border-main">
        <Skeleton className="w-full h-full rounded-none" />
        
        {/* Category Badge Skeleton */}
        <div className="absolute top-3 left-3">
          <Skeleton className="w-16 h-5 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        
        {/* Meta Info Skeleton */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <div className="flex items-center gap-1.5">
            <Skeleton className="w-3 h-3 rounded-full" />
            <Skeleton className="w-20 h-2.5" />
          </div>
          <div className="flex items-center gap-1.5">
            <Skeleton className="w-3 h-3 rounded-full" />
            <Skeleton className="w-12 h-2.5" />
          </div>
        </div>

        {/* Title Skeleton */}
        <Skeleton className="w-full h-6 mb-2" />
        <Skeleton className="w-3/4 h-6 mb-3" />

        {/* Excerpt Skeleton */}
        <Skeleton className="w-full h-3 mb-2" />
        <Skeleton className="w-full h-3 mb-2" />
        <Skeleton className="w-5/6 h-3 mb-4 flex-1" />

        {/* Footer Skeleton */}
        <div className="pt-3 border-t border-border-main/50 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <Skeleton className="w-7 h-7 rounded-full" />
            <Skeleton className="w-20 h-3" />
          </div>
          
          <Skeleton className="w-7 h-7 rounded-full" />
        </div>
      </div>
    </article>
  );
}
