import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './LogIn.style';
import {Formik} from 'formik';
import Input from '../../components/Input-LogIn/Input-LogIn';
import Button from '../../components/Button-blue';

function LogIn(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Giriş Yap</Text>
            <Formik 
                initialValues={{email: '', password: ''}} 
                onSubmit={formValues => console.log(formValues)}>
                {({handleSubmit, handleChange, values}) => (
                    <View style={styles.body_container}>
                        <Input 
                            placeholder="E-Posta" 
                            value={values.email}
                            onType={handleChange('email')}
                        />
                        <Input 
                            placeholder="Şifre" 
                            value={values.password}
                            onType={handleChange('password')}
                        />
                        <TouchableOpacity>
                            <Text style={styles.text}>Şifremi hatırlamıyorum</Text>
                        </TouchableOpacity>
                        <Button title="Giriş Yap" onPress={handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default LogIn;