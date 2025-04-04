// screens/homeStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0E1C8',
  },
  image: {
    height: 300,
    width: 300,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#92a969',      
    paddingVertical: 15,               
    paddingHorizontal: 40,            
    borderRadius: 25,                   
    alignItems: 'center',            
    justifyContent: 'center',   
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    color: '#283314',                  
    fontSize: 30,                      
    fontFamily: 'Georgia',              
    fontWeight: 'bold',                 
  },
    version: {
        fontSize: 15,
        color: '#283314',
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        textAlign: 'center',
        paddingBottom: 20,
    },
});

export default styles;
