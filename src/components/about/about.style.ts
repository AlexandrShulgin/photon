
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
        backgroundColor:'rgba(217, 217, 217, 0.25)',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: pixel(18),
        marginBottom: pixel(35),
        color: '#FFFFFF',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    modalText: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.74)', // Белый цвет для текста
        marginBottom: 8,
      },
      boldText: {
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 0.74)', // Золотой цвет для выделения текста
      },
});

export default styles;
