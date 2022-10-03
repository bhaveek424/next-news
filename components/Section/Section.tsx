import { Post } from "../../shared/types";
import { PostCard } from "../Post";
import { Grid, Title } from "./style";

type SectionProps = {
  title: string;
  posts: Post[];
};

export const Section = ({ title, posts }: SectionProps) => {
  return (
    <section>
      <Title>{title}</Title>
      <Grid>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>
    </section>
  );
};
