import AvatarSkeletonUI from "@/shared/components/common/loading/AvatarSkeletonUI";
import { Skeleton } from "@/shared/components/ui/skeleton";

export default function PostSkeletonUI() {
  return (
    <div className="flex flex-col space-y-3 pl-6 pr-6 h-78 pt-6">
      <AvatarSkeletonUI />
      <Skeleton className="h-[168px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-12" />
      </div>
      <div className="flex flex-col pt-3 pl-5 pr-5 gap-6">
        <Skeleton className="h-5 w-12" />
        <div className="pl-16">
          <Skeleton className="h-25 w-75" />
        </div>
      </div>
    </div>
  );
}
