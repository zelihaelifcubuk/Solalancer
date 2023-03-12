import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './SignUp.style';
import {Formik} from 'formik';
import Input from '../../components/Input-SignUp/Input-SignUp';
import Button from '../../components/Button-blue';

function SignUp({navigation}: {navigation: any}){
    function goToEmailValidation(){
        navigation.navigate('EmailValidation');
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Kayıt Ol</Text>
            <Formik 
                initialValues={{name: '', surname:'', email: '', password: ''}} 
                onSubmit={formValues => console.log(formValues)}>
                {({handleSubmit, handleChange, values}) => (
                    <View>
                        <Input 
                            placeholder="Ad" 
                            value={values.email}
                            onType={handleChange('name')}
                        />
                        <Input 
                            placeholder="Soyad" 
                            value={values.email}
                            onType={handleChange('surname')}
                        />
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
                        <Button title="Sonraki Adım" onPress={goToEmailValidation}/>
                    </View>
                )}
            </Formik>
        </View>
    );
};

export default SignUp;