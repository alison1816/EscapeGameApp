import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#F0E1C8',
  },
  titleContainer: {
    alignItems: 'left',  // Center content vertically
    backgroundColor: '#92a969', 
    paddingHorizontal: 10,  // Add padding on the left and right sides
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10, 
    color: '#283314' 
  },
});

export default styles;