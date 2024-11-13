import { StyleSheet } from "react-native";
import { pixel } from "../../utils/native-pixel";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: pixel(111),
    backgroundColor: "rgba(217, 217, 217, 0.12)",
    borderRadius: pixel(24),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: pixel(10)
  },
  exampleTitle: {
    fontSize: pixel(14),
    fontWeight: "400",
    lineHeight: pixel(16),
    color: "rgba(255, 255, 255, 0.77)",
    textAlign: "center",
  },
});
export default styles;
