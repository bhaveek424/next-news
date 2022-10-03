import Link from "next/link";
import { Card, Figure, Title, Excerpt } from "./PostCardStyle";

export const PostCard = () => {
  return (
    <Link href="/post/example" passHref>
      <Card>
        <Figure>
          <img alt="Post photo" src="/image1.jpg" />
        </Figure>
        <Title>Post Title!</Title>
        <Excerpt>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            vitae suscipit voluptate animi voluptates optio blanditiis
            necessitatibus tenetur! Dicta fuga voluptas soluta quam, quibusdam
            officia nulla nostrum at autem. Animi!
          </p>
        </Excerpt>
      </Card>
    </Link>
  );
};
