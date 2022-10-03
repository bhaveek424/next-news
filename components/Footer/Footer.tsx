import { Center } from "../Center";
import { Container } from "./style";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Center>
        <a href="https://www.github.com/bhaveek424">Bhaveek Jain </a>{" "}
        {currentYear}
      </Center>
    </Container>
  );
};
