import { StyleSheet } from 'react-native';
import { pixel } from '../../../../utils/native-pixel';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        paddingVertical: pixel(8)
    },
    cloud: {
        borderRadius: pixel(12),
        paddingVertical: pixel(8),
        paddingHorizontal: pixel(16),
        marginBottom: pixel(2),
        maxWidth: pixel(300),
        backgroundColor: "rgba(103, 80, 164, 0.77)",
        flex: 1
    },
    cloudFromMe: {
        borderBottomLeftRadius: pixel(12),
        backgroundColor: "rgba(92, 92, 92, 0.2)",
        flexDirection: "row",
        gap: pixel(5),
        flex: 1
    },
    cloudText: {
        fontSize: pixel(16),
        fontWeight: '400',
        color: "white",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: pixel(16),
        flex: 1
    },
    bottomContainer: {
        flexDirection: 'row',
        marginTop: pixel(12),
        marginLeft: pixel(10),
        flex: 1,
    },
});

export default styles