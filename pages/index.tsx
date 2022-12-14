import React from "react";
import Head from "next/head";
import { Post, Category } from "../shared/types";
import { Feed } from "../components/Feed";
import { fetchPosts, fetchCategories } from "../request";

type FrontProps = {
  posts: Post[];
  categories: Category[];
};

export async function getServerSideProps() {
  const categories = await fetchCategories();
  const posts = await fetchPosts();
  return { props: { posts, categories } };
}

export default function Front({ posts, categories }: FrontProps) {
  return (
    <>
      <Head>
        <title>Front page of the internet</title>
      </Head>
      <main>
        <Feed posts={posts} categories={categories} />
      </main>
    </>
  );
}
