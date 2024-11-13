import { StyleSheet } from "react-native";
import { pixel } from "../../utils/native-pixel";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: pixel(35)
  },
  header: {
    gap: pixel(16),
    paddingHorizontal: pixel(26),
    paddingVertical: pixel(21),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(5, 1, 51, 1)',
    marginBottom: pixel(75)
  },
  title: {
    fontSize: pixel(16),
    fontWeight: '400',
    color: 'rgba(230, 224, 233, 1)',
    flex: 1
  },
  subContainer: {
    paddingHorizontal: pixel(26),
    gap: pixel(12)

  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: pixel(35),
  },
  language: {
    paddingHorizontal: pixel(22),
    borderRadius: pixel(21),
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  },
  languageText: {
    fontSize: pixel(14),
    fontWeight: '400',
    color: 'rgba(230, 224, 233, 1)'
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: pixel(16),
    borderBottomWidth: pixel(1),
    borderBottomColor: 'rgba(255, 255, 255, 0.2)'
  }

});
export default styles;
