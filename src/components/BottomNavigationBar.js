import React from "react";
import styled from "styled-components";
import { ZapIcon } from "../components/icons/ZapIcon";
import { Pressable, TouchableOpacity, View } from "react-native";
import { CenteredRow } from "./utils/Row";

const BottomBarContainer = styled.View`
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  padding: 15px 24px 15px;
  margin: 0 24px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sm};
`;

const RecordNewIdeaButtonContainer = styled(Pressable)`
  background-color: black;
  padding: 15px 16px;
  z-index: 100;
  align-self: center;
  justify-self: center;
  border-radius: 40px;
  bottom: 37px;
  margin-bottom: -65px;
`;

const RecordNewIdeaButtonText = styled.Text`
  color: white;
  font-family: ${({ theme }) => theme.fonts.secondaryHeading};
`;

const NavBar = styled.View`
  flex-direction: column;
`;

export function BottomNavigationBar({ state, descriptors, navigation }) {
  return (
    <NavBar>
      <RecordNewIdeaButtonContainer
        accessibilityRole="button"
        onPress={() => navigation.navigate("IdeaInput")}
      >
        <CenteredRow>
          <ZapIcon />
          <View style={{ marginLeft: 8 }}></View>
          <RecordNewIdeaButtonText>Record New Idea</RecordNewIdeaButtonText>
        </CenteredRow>
      </RecordNewIdeaButtonContainer>
      <BottomBarContainer>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              key={index}
            >
              {options.tabBarIcon && options.tabBarIcon(isFocused, route.name)}
            </TouchableOpacity>
          );
        })}
      </BottomBarContainer>
    </NavBar>
  );
}
