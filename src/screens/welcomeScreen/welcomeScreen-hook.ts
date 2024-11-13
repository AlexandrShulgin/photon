import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useCallback, useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ConnectAI } from "../../store/slices/aiSlice";
import { NavigationParamList } from "../../navigation/mainNavigation";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";

type Props = NativeStackScreenProps<NavigationParamList, "CHATSCREEN">;

export default () => {
  const { t } = useTranslation();
  const PhotonIcon = require("../../assets/images/photon.png");
  const aiConnect = useAppSelector((state) => state.ai.aiConnect);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<Props["navigation"]>();

  useEffect(() => {
    if (aiConnect && aiConnect.message === "Chat is ready!") {
      navigation.navigate("CHATSCREEN");
    }
  }, [aiConnect]);

  const onPressToStart = useCallback(() => {
    dispatch(ConnectAI());
  }, [dispatch]);

  const openPrivacyPolicy = () => {
    Linking.openURL('https://photonchatai.cloud');
  };

  return {
    t,
    PhotonIcon,
    onPressToStart,
    aiConnect,
    openPrivacyPolicy
  };
};
