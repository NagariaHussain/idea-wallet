import React, { useState } from "react";
import { Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import styled from "styled-components";
import { Row } from "../utils/Row";

const data = [
  {
    title: "Fun",
    emoji: "😆",
    id: 483,
  },
  {
    title: "College",
    emoji: "📖",
    id: 467,
  },
  {
    title: "Business",
    emoji: "🍿",
    id: 764,
  },
];

const MenuItemRow = styled(Row)`
  padding: 12px 10px 12px 18px;
`;

const renderMenuItem = (item) => {
  return (
    <MenuItemRow>
      <Text>{item.emoji}</Text>
      <View style={{ marginLeft: 8 }}></View>
      <Text>{item.title}</Text>
    </MenuItemRow>
  );
};

const DropdownMenu = styled(Dropdown)`
  border: 1px solid ${({ theme }) => theme.colors.stroke.main};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.xs};
  background-color: white;
  padding: 12px 10px 12px 18px;
`;

export const CategorySelectMenu = () => {
  const [value, setValue] = useState(null);

  return (
    <DropdownMenu
      onChange={(item) => {
        console.log(item.title);
        setValue(item.value);
      }}
      labelField="title"
      valueField="id"
      renderItem={renderMenuItem}
      data={data}
    />
  );
};
