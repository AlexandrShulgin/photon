import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { NavigationParamList } from "../../navigation/mainNavigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import i18n from "../../locale/i18n";

type Props = NativeStackScreenProps<NavigationParamList, "SETTINGSSCREEN">;

export default () => {
    const [modalVisible, setModalVisible] = useState<string | boolean>(false);
    const [selectedLanguage, setSelectedLanguage] = useState('Выберите язык');
    const navigation = useNavigation<Props["navigation"]>();
    const { t } = useTranslation();

    useEffect(() => {
        let language = ''
        switch (i18n.language) {
            case 'en':
                language = 'English'
                break;
            case 'fr':
                language = 'Français'
                break;
        }
        setSelectedLanguage(language);

    }, [i18n.language]);

    const openModal = (modal: string) => {
        setModalVisible(modal);
    };

    const selectLanguage = (language: string) => {
        i18n.changeLanguage(language);
        setModalVisible(false);
    };

    return {
        t,
        modalVisible,
        selectedLanguage,
        navigation,
        setModalVisible,
        selectLanguage,
        openModal,
    };
};
