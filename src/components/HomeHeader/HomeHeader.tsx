import React from "react";
import { TouchableOpacity } from "react-native";
import { Power } from "phosphor-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  Container,
  Greeting,
  Message,
  Name,
  Picture,
} from "./HomeHeader.styles";

import theme from "../../theme";

const HomeHeader: React.FC = () => {
  const insets = useSafeAreaInsets();

  const paddingTop = insets.top + 32;

  return (
    <Container style={{ paddingTop }}>
      <Picture
        source={{ uri: "https://github.com/lybiomoraesjr.png" }}
        placeholder="L184i9ofbHof00ayjsay~qj[ayj@"
      />
      <Greeting>
        <Message>Olá</Message>

        <Name>Lybio</Name>
      </Greeting>

      <TouchableOpacity activeOpacity={0.7}>
        <Power size={32} color={theme.COLORS.GRAY_400} />
      </TouchableOpacity>
    </Container>
  );
};

export default HomeHeader;
