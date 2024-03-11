import React from "react";
import { Container, Title, Slogan } from "./SignIn.styles";

import backgroundImg from "../../assets/background.png";

const SignIn: React.FC = () => {
  return (
    <Container source={backgroundImg}>
      <Title>IF-safe</Title>

      <Slogan>Segurança em primeiro lugar</Slogan>
    </Container>
  );
};

export default SignIn;
