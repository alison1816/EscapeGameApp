import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', // horizontal layout
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginBottom: 16,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    height: 80,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: '#2563eb',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
  },
});

export default styles;