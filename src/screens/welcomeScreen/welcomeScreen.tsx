import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./welcomeScreen.style";
import welcomeScreenHook from "./welcomeScreen-hook";
import WebView from "react-native-webview";
import MainButton from "../../components/mainButton/mainButton";

const WelcomeScreen: React.FC = () => {
  const { t, PhotonIcon, onPressToStart, aiConnect, openPrivacyPolicy } = welcomeScreenHook();
  if (aiConnect && aiConnect.url) {
    return <WebView source={{ uri: aiConnect.url }} />;
  }
  return (
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
      <LinearGradient
        colors={["rgba(0, 12, 124, 0.53)", "rgba(33, 22, 165, 1)"]}
        locations={[0, 0.4929]}
        start={{ x: 0.01, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.titleContainer}
      >
        <Text style={styles.title}>{"Personal GPT"}</Text>
      </LinearGradient>
      <View style={{ alignItems: "center" }}>
        <Image source={PhotonIcon} style={styles.icon} />
        <Text style={styles.name}>Photon</Text>
      </View>
      <MainButton title={t('getStarted')} onPress={onPressToStart} />
      <TouchableOpacity onPress={openPrivacyPolicy}>
        <Text style={styles.terms}>Privacy Policy and Terms of Service</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
export default WelcomeScreen;
