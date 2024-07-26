import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from '../styles/ProfilePictureSelectionStyle';
import LinearGradient from 'react-native-linear-gradient';

const ProfilePictureSelection = ({ navigation }) => {
  const [mainIcon, setMainIcon] = useState(require("../src/templates/image/profiles/ProfileBlue.png"));
  const [icons, setIcons] = useState([
    require("../src/templates/image/profiles/ProfilePurple.png"),
    require("../src/templates/image/profiles/ProfileYellow.png"),
    require("../src/templates/image/profiles/ProfileDarkBlue.png"),
    require("../src/templates/image/profiles/ProfileGreen.png"),
    require("../src/templates/image/profiles/ProfilePink.png"),
    require("../src/templates/image/profiles/ProfileLightGreen.png"),
  ]);

  const switchIcons = (index) => {
    const newIcons = [...icons];
    const clickedIcon = newIcons[index];
    newIcons[index] = mainIcon;
    setMainIcon(clickedIcon);
    setIcons(newIcons);
  };

  return (
    <ScrollView>
      <LinearGradient 
      style={styles.container}
      colors={['#3580f9', '#96def5']}>

        {/* Logo principal */}
        <View style={styles.icon_container}>
          <Image
            style={styles.icon}
            source={mainIcon}
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

        {/* Muda de imagem ao clicar */}
        <View style={styles.card}>
          {icons.map((icon, index) => (
            <TouchableOpacity key={index} style={styles.icon_card_Container} onPress={() => switchIcons(index)}>
              <Image
                style={styles.icon_card}
                source={icon}
              />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.yellow_button}>
          <Text style={styles.text}>Concluído</Text>
        </TouchableOpacity>

      </LinearGradient>
    </ScrollView>
  );
};

export default ProfilePictureSelection;
