import { Center } from "../Center";
import { Container } from "../Header/style";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Center>
        <a href="https://www.github.com/bhaveek424" target="_blank">
          {currentYear}
        </a>
      </Center>
    </Container>
  );
};
