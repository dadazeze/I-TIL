import { Skeleton } from "../../ui/skeleton";
import AvatarSkeletonUI from "./AvatarSkeletonUI";

export default function CardSkeletonUI() {
  return (
    <div className="flex flex-col space-y-3 pl-6 pr-6 h-78 pt-6">
      <AvatarSkeletonUI />
      <Skeleton className="h-[168px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-12" />
      </div>
    </div>
  );
}
