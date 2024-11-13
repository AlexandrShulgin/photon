import React, { useEffect } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import styles from "./ChatExampleItem.style";

interface IProps {
  text: string;
}

const ChatExampleItem: React.FC<IProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.exampleTitle}>{text}</Text>
    </View>
  );
};
export default ChatExampleItem;
