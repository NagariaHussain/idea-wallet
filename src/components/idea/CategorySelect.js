import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import styled from "styled-components/native";
import { CenteredRow } from "../utils/Row";
import { theme } from "../../infra/theme";

const MenuItemRow = styled(CenteredRow)`
  padding: 12px 10px 12px 18px;
`;

const MenuSelectedText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-family: ${(props) => props.theme.fonts.cardTitle};
`;

const MenuItemEmoji = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.lg};
`;

const renderMenuItem = (item) => {
  return (
    <MenuItemRow>
      <MenuItemEmoji>{item.emoji}</MenuItemEmoji>
      <View style={{ marginLeft: 8 }}></View>
      <MenuSelectedText>{item.title}</MenuSelectedText>
    </MenuItemRow>
  );
};

const DropdownMenu = styled(Dropdown)`
  border: 1px solid ${(props) => props.theme.colors.stroke.main};
  border-radius: ${(props) => props.theme.sizes.borderRadius.xs};
  background-color: white;
  padding: 12px 10px 12px 18px;
`;

export const CategorySelectMenu = (props) => {
  const [value, setValue] = useState(props?.categories[0]);

  return (
    <DropdownMenu
      onChange={(item) => {
        props.onChange(item);
        setValue(item);
      }}
      labelField="title"
      valueField="id"
      renderItem={renderMenuItem}
      data={props.categories}
      value={value}
      placeholderStyle={styles.menuBoxText}
      selectedTextStyle={styles.menuBoxText}
      renderLeftIcon={() => <MenuItemEmoji>{value.emoji}</MenuItemEmoji>}
    />
  );
};

const styles = StyleSheet.create({
  menuBoxText: {
    fontFamily: theme.fonts.cardTitle,
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.fontSizes.md,
    marginLeft: 8,
  },
});
