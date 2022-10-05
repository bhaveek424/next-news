import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Post } from "../../shared/types";
import { fetchPosts } from "../../api/category";
import { Section } from "../../components/Section";
import { Loader } from "../../components/Loader";
import { categoryPaths as paths } from "../../shared/staticPaths";

type CategoryProps = {
  posts: Post[];
};

export const getStaticProps: GetStaticProps<CategoryProps> = async ({
  params,
}) => {
  const posts = await fetchPosts(params.id as string);
  return { props: { posts } };
};

export async function getStaticPaths() {
  return { paths, fallback: true };
}

const Category = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) return <Loader />;
  return <Section posts={posts} title={router.query.id as string} />;
};

export default Category;
