import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor: '#becbff',
        width: Dimensions.get('window').width * 0.7,
        margin: 50,
        borderRadius:5,
        height: 40,

    },
    text:{
        color: 'black',
        fontSize: 17,
        textAlign: 'center',
        paddingTop:7,
    }
})