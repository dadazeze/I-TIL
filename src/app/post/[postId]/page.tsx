import { getPostById } from "@/shared/services/post";

interface IProps {
    params: {
        postId: string
    }
}

export default async function PostPage({params}: IProps) {
    const postId = params.postId
    const post = await getPostById(postId);
    console.log(post)
    return <></>
}