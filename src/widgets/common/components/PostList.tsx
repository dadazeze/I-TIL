import { getPostList } from "@/shared/services/post";
import { CardUI } from "@/widgets/common/components/CardUI";

interface IProps {
  // postList: IPostView[];
}

export const PostList = async () => {
  const postList = await getPostList();
  return (
      <section className="flex flex-col gap-1 bg-grayScale-100 pt-1 pb-[65px]">
        {postList.map((item) => (
          <CardUI key={item.id} item={item} />
        ))}
      </section>
  );
};
