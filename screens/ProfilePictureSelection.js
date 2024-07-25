import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import styles from '../styles/ProfilePictureSelectionStyle';

const ProfilePictureSelection = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        {/* Logo principal, implementar função para quando clicar trocar de cor */}
        <View style={styles.icon_container}>
          <Image
            style={styles.icon}
            source={require("../src/templates/image/profiles/ProfileBlue.png")}
          />
        </View>

        {/* Entrada de nome */}
        <View style={styles.input}>
          <TextInput placeholder='Nome' />
          <Image
            source={require("../src/templates/image/profiles/border_color.png")}
          />
        </View>

        {/* Entrada de email */}
        <View style={styles.input}>
          <TextInput placeholder='Email' />
          <Image
            source={require("../src/templates/image/profiles/border_color.png")}
          />
        </View>

        {/* Entrada de senha */}
        <View style={styles.input}>
          <TextInput placeholder='Senha' />
          <Image
            source={require("../src/templates/image/profiles/border_color.png")}
          />
        </View>

        <Text style={styles.text}>Ícones</Text>

        <View style={styles.card}>
          {/* Icone Roxo */}
          <TouchableOpacity style={styles.icon_card_Container}>
            <Image
              style={styles.icon_card}
              source={require("../src/templates/image/profiles/ProfilePurple.png")}
            />
          </TouchableOpacity>

          {/* Icone Amarelo */}
          <TouchableOpacity style={styles.icon_card_Container}>
            <Image
              style={styles.icon_card}
              source={require("../src/templates/image/profiles/ProfileYellow.png")}
            />
          </TouchableOpacity>

          {/* Icone Azul escuro */}
          <TouchableOpacity style={styles.icon_card_Container}>
            <Image
              style={styles.icon_card}
              source={require("../src/templates/image/profiles/ProfileDarkBlue.png")}
            />
          </TouchableOpacity>

          {/* Icone Verde */}
          <TouchableOpacity style={styles.icon_card_Container}>
            <Image
              style={styles.icon_card}
              source={require("../src/templates/image/profiles/ProfileGreen.png")}
            />
          </TouchableOpacity>

          {/* Icone Rosa */}
          <TouchableOpacity style={styles.icon_card_Container}>
            <Image
              style={styles.icon_card}
              source={require("../src/templates/image/profiles/ProfilePink.png")}
            />
          </TouchableOpacity>

          {/* Icone Verde Claro */}
          <TouchableOpacity style={styles.icon_card_Container}>
            <Image
              style={styles.icon_card}
              source={require("../src/templates/image/profiles/ProfileLightGreen.png")}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.yellow_button}>
          <Text style={styles.text}>Concluído</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default ProfilePictureSelection;
