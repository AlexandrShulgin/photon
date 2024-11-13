import { StyleSheet } from "react-native";
import { pixel } from "../../utils/native-pixel";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: pixel(50),
    paddingBottom: pixel(20),
    backgroundColor: "rgba(0, 12, 124, 0.53)",
  },
  settingsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: pixel(16),
    paddingHorizontal: pixel(20),
    alignItems: "center"
  },
  settingsIcon: {
    width: pixel(20),
    height: pixel(20),
  },
  settingsText: {
    fontSize: pixel(16),
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
  },
  allExamples: {
    gap: pixel(20),
    marginTop: pixel(34),
    flex: 1,
  },
  exampleTitleContainer: {
    flexDirection: "row",
  },
  chatContainer: {
    flex: 1,
    marginHorizontal: pixel(16)
  },
  exampleTitleContainerWithGap: {
    flexDirection: "row",
    alignItems: "center",
    gap: pixel(8),
    paddingHorizontal: pixel(15),
    marginTop: pixel(20),
    marginBottom: pixel(10)
  },
  variantsContainer: {
    flexDirection: "row",
    marginHorizontal: pixel(27),
    gap: pixel(19),
  },
  exampleTitle: {
    fontSize: pixel(20),
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
  },
  input: {
    flex: 1,
    color: "white",
  },
  inputContainer: {
    marginHorizontal: pixel(20),
    borderRadius: pixel(8),
    paddingVertical: pixel(8),
    paddingHorizontal: pixel(8),
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row"
  },
  divider: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: 1,
    width: "100%",
    marginVertical: pixel(12)
  },
  bottomContainer: {
    justifyContent: "flex-end",
    backgroundColor: "#050133",
  }
});
export default styles;
