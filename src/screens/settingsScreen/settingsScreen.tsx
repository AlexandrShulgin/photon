import React from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import LanguageSelector from '../../components/languageSelector/languageSelector';
import settingsScreenHook from './settingsScreen-hook';
import styles from './settingsScreen.style';
import { Icons } from '../../assets/icons';
import About from '../../components/about/about';

const SettingsScreen: React.FC = () => {
  const {
    t,
    modalVisible,
    selectedLanguage,
    navigation,
    setModalVisible,
    selectLanguage,
    openModal,
  } = settingsScreenHook();

  return (
    <LinearGradient
      colors={[
        "rgba(0, 12, 124, 0.53)",
        "rgba(1, 10, 106, 0.646699)",
        "#050133",
      ]}
      locations={[0, 0.085, 0.3422]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ backgroundColor: 'rgba(0, 12, 124, 0.53)', flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons.Back />
          </TouchableOpacity>
          <Text style={styles.title}>{t('settings')}</Text>
        </View>
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={()=>openModal('language')}>
            <View style={styles.menuItem}>
              <Text style={styles.title}>{t('language')}</Text>
              <View style={styles.languageContainer}>
                <View style={styles.language}>
                  <Text style={styles.languageText}>{selectedLanguage}</Text>
                </View>
                <Icons.ArrowRight />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>openModal('about')}>
            <View style={styles.menuItem}>
              <Text style={styles.title}>{t('about')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible != false}
        onRequestClose={() => setModalVisible(false)}
      >
        {
          modalVisible === 'language' ?  <LanguageSelector
          selectLanguage={selectLanguage}
          currentLanguage={selectedLanguage}
          setModalVisible={setModalVisible} /> : <About setModalVisible={setModalVisible}/>
        }
       
      </Modal>
    </LinearGradient>
  )

}

export default SettingsScreen