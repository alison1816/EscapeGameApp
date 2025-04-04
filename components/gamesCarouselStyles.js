import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#d2b06f',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      height: 270,
      width: '100%',
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.46,        // based on your image size
        resizeMode: 'contain',    // makes sure the whole image fits
        borderRadius: 8,
     },
});

export default styles;