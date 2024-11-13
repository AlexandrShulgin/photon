import React, { Dispatch, SetStateAction } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Icons } from '../../assets/icons';
import styles from './about.style';

interface IProps {
    setModalVisible: Dispatch<SetStateAction<boolean | string>>;
}

const About: React.FC<IProps> = ({ setModalVisible }) => {

    return (
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalText}>App Name: <Text style={styles.boldText}>Photon</Text></Text>
                    <Text style={styles.modalText}>Version: <Text style={styles.boldText}>1.0.0</Text></Text>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                    >
                        <Icons.Close size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};


export default About;
