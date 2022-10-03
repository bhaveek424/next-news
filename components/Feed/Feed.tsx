import { Category, Post } from "../../shared/types";
import { Section } from "../Section";

type FeedProps = {
  posts: Post[];
  categories: Category[];
};

export const Feed = ({ posts, categories }: FeedProps) => {
  return (
    <>
      {categories.map((currentCategory) => {
        const inSection = posts.filter(
          (post) => post.category === currentCategory
        );

        return (
          <Section
            key={currentCategory}
            title={currentCategory}
            posts={inSection}
          />
        );
      })}
    </>
  );
};
