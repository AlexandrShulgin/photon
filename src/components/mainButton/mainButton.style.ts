import { StyleSheet } from "react-native";
import { pixel } from "../../utils/native-pixel";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingVertical: pixel(24),
    borderRadius: pixel(24),
    alignItems: "center"
  },
  title: {
    fontSize: pixel(14),
    fontWeight: "400",
    lineHeight: pixel(16),
    color: "rgba(1, 1, 1, 1)",
    textAlign: "center",
  },
});
export default styles;
