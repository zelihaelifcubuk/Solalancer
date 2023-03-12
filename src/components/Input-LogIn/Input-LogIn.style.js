import {StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
    container:{
        alignItems: 'center',
        padding: 5,
        margin: 15,
    },
    input:{
        borderWidth: 3,
        width: Dimensions.get('window').width * 0.7,
        height: 40,
        fontSize:17,
        borderRadius: 5,
        borderColor: '#becbff',
        padding: 10,
    },
});