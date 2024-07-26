import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Image} from 'react-native';
import styles from '../styles/Login_SignUp_Style';

const LoginScreen = ({ navigation }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <View 
    style={styles.container}>
      <Text 
      style={[styles.title,{marginBottom:100}]}>
        Insira seus dados
        </Text>

      {/* Campo de entrada para Nome de usuário ou email */}
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário ou email" 
      />

      
      <View
      style={styles.input}>
    
        {/* Campo de entrada para Senha */}
        <TextInput
        placeholder="Senha"
        secureTextEntry={secureTextEntry}
      />
        <TouchableOpacity
        onPress={() => setSecureTextEntry(!secureTextEntry)}>
          
          {/* Ícone para mostrar/ocultar senha */}
          <Image
            source={
              secureTextEntry
                ? require('../src/templates/image/show.png')
                : require('../src/templates/image/hide.png')
            }
            resizeMode='contain'
            style={styles.ico}
          />
        </TouchableOpacity>

      </View>
      

      {/* Botão de Entrar */}
      <TouchableOpacity 
      style={styles.blue_button}
      onPress={() => navigation.navigate('Home Screen')}>
        <Text style={styles.subtitle}>ENTRAR</Text>
      </TouchableOpacity>

      <View
      style={styles.lineContainer}>
        <View style={styles.line}></View>
        <Text style={[styles.subtitle,styles.lineText]}>Ou</Text>
        <View style={styles.line}></View>
      </View>

      {/* Botão Google*/}
      <TouchableOpacity style={styles.white_button}>
        <Image
        resizeMode='contain'
        style={styles.ico}
        source={require('../src/templates/image/google.png')}>
        </Image>

        <Text style={[styles.subtitle,styles.blue_text]}>Google</Text>
      </TouchableOpacity> 
      

    </View>
  );
};

export default LoginScreen;
