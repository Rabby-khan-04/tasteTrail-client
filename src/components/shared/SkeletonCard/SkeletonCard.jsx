import { Skeleton } from "@/components/ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="w-full aspect-square rounded-[20px]" />
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-2/5 rounded-xl" />
          <Skeleton className="h-8 w-2/5 rounded-xl" />
        </div>
        <Skeleton className="h-14 rounded-xl" />
      </div>
    </div>
  );
};

export default SkeletonCard;
