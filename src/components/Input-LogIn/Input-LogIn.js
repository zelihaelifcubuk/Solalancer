import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Input-LogIn.style';

const Input = ({placeholder, value, onType}) => {
    return(
        <View style={styles.container}>
            <TextInput 
                placeholder={placeholder} 
                onChangeText={onType}
                value={value}
                style={styles.input}
            />
        </View>
    );
};

export default Input;