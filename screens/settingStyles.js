import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  outerContainer: {
    paddingTop: 60,
    flexGrow: 1,
    alignItems: 'left',
    backgroundColor: '#F0E1C8',
  },
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#F0E1C8',
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    alignItems: 'left',  
    backgroundColor: '#92a969', 
    paddingHorizontal: 10,  
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10, 
    color: '#283314' 
  },
});

export default styles;