import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Loading, Title } from "./Button.styles";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

const Button: React.FC<Props> = ({
  title,
  isLoading = false,
  ...rest
}: Props) => {
  return (
    <Container activeOpacity={0.7} disabled={isLoading} {...rest}>
      {isLoading ? <Loading /> : <Title>{title}</Title>}
    </Container>
  );
};

export default Button;
