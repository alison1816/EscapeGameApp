import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        flexGrow: 1,
        alignItems: 'left',
        backgroundColor: '#F0E1C8',
    },
    titleContainer: {
        alignItems: 'left',  // Center content vertically
        backgroundColor: '#92a969',  // Set background color to match the container
        paddingHorizontal: 20,  // Add padding on the left and right sides
        paddingVertical: 10,  // Add padding on the top and bottom
    },
    backButton: {
        padding: 10,  // Add padding around the button
    },
    image: {
       width: '100%',  // Make the image take the full width of the container
       height: 270,  // Set a fixed height for the image
       resizeMode: 'cover',  // Ensure the image scales properly
    },
    title: {
       fontSize: 25,
       fontWeight: 'bold',
       marginVertical: 10,  // Space between title and description 
    },
    bodyContainer: {
        flex: 1,
        alignItems: 'left',  // Center content vertically
        backgroundColor: 'white',  // Set background color to match the container
        paddingHorizontal: 20,  // Add padding on the left and right sides
        paddingTop: 20,  // Add padding on the top and bottom
        paddingBottom: 130,  // Add padding on the top and bottom
        borderBottomLeftRadius: 20, 
        borderBottomRightRadius: 20,
    },
    tagline: {
         fontSize: 18,
         color: 'black',
         marginBottom: 20,  // Space between description and any other content
         textAlign: 'left',  // Center the description
         fontWeight: 'bold', 
    },
    description: {
       fontSize: 16,
       color: 'black',
       marginBottom: 20,  // Space between description and any other content
       textAlign: 'left',  // Center the description
    },
    buttonsContainer: {
       flexDirection: 'row',
       justifyContent: 'flex-end',
       width: '100%',  // Make the buttons take the full width of the container
    },
    startButton: {
       alignSelf: 'flex-end',
       borderWidth: 2,                  // Border thickness
        borderColor: '#92a969',
       backgroundColor: '#92a969',
       paddingVertical: 8,
       paddingHorizontal: 16,
       borderRadius: 12,
       marginTop: 20,  // Space between description and button
       marginLeft: 10,  // Space between the two buttons
      },
    startButtonText: {
       color: '#283314',
       fontWeight: '500',
    },
    hintButton: {
        alignSelf: 'flex-end',
        borderWidth: 2,                  // Border thickness
        borderColor: '#92a969', 
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 12,
        marginTop: 20,  // Space between description and button
       },
    hintButtonText: {
        color: '#283314',
        fontWeight: '500',
     },
      comingSoonText: {
         fontSize: 40,
         fontWeight: 'bold',
         marginTop: 20,  
         textAlign: 'center',  
      }
});

export default styles;