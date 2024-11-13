
import { StyleSheet } from "react-native";
import { pixel } from "../../utils/native-pixel";

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: 300,
        position: 'relative',
        backgroundColor: 'rgba(5, 1, 51, 1)',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: pixel(18),
        marginBottom: pixel(35),
        color: '#FFFFFF',
    },
    languageButton: {
        padding: pixel(10),
        width: '100%',
        alignItems: 'center',
    },
    languageText: {
        fontSize: pixel(16),
        color: '#FFFFFF',
    },
    selectedLanguageButton: {
        backgroundColor: 'rgba(103, 80, 164, 1)',
    },
    selectedLanguageText: {
        fontWeight: 'bold',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10
    },
});

export default styles;
