import React from 'react';
import { View, Text,Image,TouchableOpacity} from 'react-native';
import styles from '../styles/StartScreenStyle';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}><Text style={styles.orange_text}>LP</Text>LIBRAS</Text>
      <Text style={styles.p}>Ensino de português para surdos</Text>
      <Image
      source={require('../src/templates/gifs/sign-language-japanese.gif')}
      style={styles.gif}>
      </Image>
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('Sign Up')}>
        <Text style={styles.p}>
          CRIAR CONTA
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button,styles.white_button]}
      onPress={() => navigation.navigate('Login')}>
        <Text style={[styles.p,styles.orange_text]}>
          JÁ TENHO UMA CONTA
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartScreen;