import { GetServerSideProps, GetStaticProps } from "next";
import { fetchPost } from "../../api/post";
import { useRouter } from "next/router";
import { Comment, Post as PostType } from "../../shared/types";
import { Loader } from "../../components/Loader";
import { postPaths as paths } from "../../shared/staticPaths";
import { PostBody } from "../../components/Post/PostBody";
import { Comments } from "../../components/Comments";
import { fetchComments } from "../../api/comments/fetch";

type PostProps = {
  post: PostType;
  comments: Comment[];
};

//export async function getStaticPaths() {
//return { paths, fallback: true };
//}

const Post = ({ post, comments }: PostProps) => {
  const router = useRouter();

  if (router.isFallback) return <Loader />;
  return (
    <>
      <PostBody post={post} />
      <Comments comments={comments} post={post.id} />
    </>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps<PostProps> = async ({
  params,
}) => {
  if (typeof params.id !== "string") throw new Error("Unexpected id");
  const post = await fetchPost(params.id);
  const comments = await fetchComments(params.id);
  return { props: { post, comments } };
};
