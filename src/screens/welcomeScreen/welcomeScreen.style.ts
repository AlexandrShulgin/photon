import { StyleSheet } from "react-native";
import { pixel } from "../../utils/native-pixel";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: pixel(16),
    paddingBottom: pixel(49),
    paddingHorizontal: pixel(24),
    backgroundColor: "rgba(0, 12, 124, 0.53)"
  },
  titleContainer: {
    paddingVertical: pixel(8),
    paddingHorizontal: pixel(16),
    borderRadius: pixel(100),
    // marginBottom: pixel(53)
  },
  title: {
    fontSize: pixel(14),
    fontWeight: "400",
    lineHeight: pixel(16),
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
  },
  icon: {
    // marginBottom: pixel(26)
  },
  name: {
    fontSize: pixel(40),
    fontWeight: "700",
    lineHeight: pixel(54),
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
  },
  terms: {
    fontSize: pixel(15),
    fontWeight: "700",
    lineHeight: pixel(54),
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
  }
});
export default styles;
