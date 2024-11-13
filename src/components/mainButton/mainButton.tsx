import React, { useEffect } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import styles from "./mainButton.style";

interface IProps {
  title: string;
  onPress: () => void;
}

const MainButton: React.FC<IProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
export default MainButton;
