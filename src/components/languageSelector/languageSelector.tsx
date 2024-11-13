import React, { Dispatch, SetStateAction } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from './languageSelector.style'
import { t } from 'i18next';
import { Icons } from '../../assets/icons';

interface IProps {
    selectLanguage: (language: string) => void;
    setModalVisible: Dispatch<SetStateAction<boolean | string>>;
    currentLanguage: string;
}

const LanguageSelector: React.FC<IProps> = ({ selectLanguage, setModalVisible, currentLanguage }) => {
    const languages = [
        { code: 'en', label: 'English' },
        { code: 'fr', label: 'Français' },
    ];

    return (
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>{t('chooseLanguage')}</Text>
                    {languages.map((language) => (
                        <TouchableOpacity
                            key={language.code}
                            style={[
                                styles.languageButton,
                                language.label === currentLanguage && styles.selectedLanguageButton,
                            ]}
                            onPress={() => {
                                selectLanguage(language.code);
                                setModalVisible(false);
                            }}
                        >
                            <Text
                                style={[
                                    styles.languageText,
                                    language.label === currentLanguage && styles.selectedLanguageText,
                                ]}
                            >
                                {language.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Icons.Close  size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};


export default LanguageSelector;
