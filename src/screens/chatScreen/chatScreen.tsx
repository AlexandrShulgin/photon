import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useMemo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { pixel } from "../../utils/native-pixel";
import ChatExampleItem from "../../components/variantItem/ChatExampleItem";
import { Icons } from "../../assets/icons";
import styles from "./chatScreen.style";
import chatScreenHook, { IExamplesData } from "./chatScreen-hook";
import MessagesListItem from "./components/messagesListItem/messagesListItem";

const ChatScreen: React.FC = () => {
  const { t, message, setMessage, handleSendMessage, messages, navigation, copyToClipboard } = chatScreenHook();

  const examplesData: IExamplesData[] = useMemo(() => {
    return [
      {
        icon: <Icons.Examples />,
        title: t('examples'),
        firstVar: t('examples1'),
        secondVar: t('examples2'),
      },
      {
        icon: <Icons.Capabilities />,
        title: t('capabilities'),
        firstVar: t('capabilities1'),
        secondVar: t('capabilities2'),
      },
      {
        icon: <Icons.Limitations />,
        title: t('limitations'),
        firstVar: t('limitations1'),
        secondVar: t('limitations2'),
      },
    ];
  }, [t]);

  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      keyboardVerticalOffset={Platform.select({ ios: pixel(40), android: pixel(-375) })}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={[
          "rgba(0, 12, 124, 0.53)", // 0%
          "rgba(1, 10, 106, 0.646699)", // 8.5%
          "#050133", // 34.22%
        ]}
        locations={[0, 0.085, 0.3422]} // Map stops to 0%, 8.5%, and 34.22%
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.container}
      >
        <TouchableOpacity onPress={() => navigation.navigate('SETTINGSSCREEN')} style={styles.settingsContainer}>
          <Icons.Settings />
          <Text style={styles.settingsText}>{t('settings')}</Text>
        </TouchableOpacity>
        <View style={styles.allExamples}>
          {
            messages.length > 0 && <View style={styles.chatContainer}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={[...messages].reverse()}
                inverted
                renderItem={({ item, index }) => (
                  <MessagesListItem
                    copyToClipboard={copyToClipboard}
                    item={item} />
                )}
              />
            </View>
          }
          {
            messages.length === 0 && <View style={styles.chatContainer}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={examplesData}
                renderItem={({ item, index }) => (
                  <View key={index} style={{ flex: 1 }}>
                    <View
                      style={
                        index === 0
                          ? styles.exampleTitleContainer
                          : styles.exampleTitleContainerWithGap
                      }
                    >
                      {item.icon}
                      <Text style={styles.exampleTitle}>{item.title}</Text>
                    </View>
                    <View style={styles.variantsContainer}>
                      <ChatExampleItem text={item.firstVar} />
                      <ChatExampleItem text={item.secondVar} />
                    </View>
                  </View>
                )}
              />
            </View>
          }
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.divider} />
          <View style={styles.inputContainer}>
            <TextInput
              value={message}
              onChangeText={setMessage}
              multiline
              style={styles.input} />
            <TouchableOpacity onPress={handleSendMessage}>
              <Icons.Send />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};
export default ChatScreen;
