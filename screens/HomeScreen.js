import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "../styles/HomeScreenStyle";
import LinearGradient from "react-native-linear-gradient";

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>

                {/* Sessão perfil */}
                <LinearGradient
                    style={styles.profileContainer}
                    colors={['#3580f9', '#96def5']}
                >
                    {/* Editar perfil */}
                    <TouchableOpacity
                        style={{ alignSelf: 'flex-end' }}
                    >
                        <Image
                            source={require("../src/templates/image/profiles/border_colorYellow.png")}
                        />
                    </TouchableOpacity>

                    {/* Imagem de perfil, implementar função para pegar a imagem de perfil escolhida */}
                    <Image
                        source={require("../src/templates/image/profiles/ProfileYellow.png")}
                        style={{ width: 200, height: 200 }}
                    />
                </LinearGradient>

                <Text
                    style={styles.orangeText}
                >
                    Nome
                </Text>

                <Text
                    style={[styles.orangeText, { textDecorationLine: 'underline', fontSize: 20,}]}
                >
                    nome@gmail.com
                </Text>

                {/* Linha */}
                <View style={styles.line} />

                {/* Container para os modúlos */}
                <View style={{ padding: 10, width: "100%" }}>

                    <Text
                        style={[styles.containerText,{marginBottom:10}]}
                    >
                        Progresso
                    </Text>

                    <View style={styles.cardContainer}>
                        <Text
                            style={[styles.containerText, {alignSelf: 'flex-start'}]}
                        >
                            Módulo 1
                        </Text>

                        {/* Botão para escolher o módulo */}
                        <TouchableOpacity style={styles.card}>
                            <View style={styles.image_container}>
                                <Image
                                    source={require("../src/templates/image/modulos/alimento.png")}
                                />
                                <Text
                                    style={styles.cardText}
                                >
                                    Alimentos
                                </Text>
                            </View>

                            <View style={styles.statusBarContainer}>

                                {/* Porcentagem StatusBar, implementar função*/}
                                <Text
                                    style={styles.cardText}
                                >
                                    0%
                                </Text>

                                {/* StatusBar, implementar função para funcionar*/}
                                <View style={styles.statusBar} />
                            </View>

                            {/* Medalha de conclusão, implementar função para mudar*/}
                            <Image
                                source={require("../src/templates/image/modulos/medalha.png")}
                                style={{ width: 60, height: 60, marginTop: 15 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                        {/* Exemplo de módulo bloqueado */}
                        <TouchableOpacity style={styles.card}>
                            <View style={styles.image_container}>
                                <View
                                style={{width:92,height:72,alignItems:'center',justifyContent:'center',backgroundColor:'#d1d1d1',borderRadius:10}}>
                                    <Image
                                    style={{width:50,height:50}}
                                    source={require("../src/templates/image/modulos/lockGray.png")}
                                    />

                                </View>
                                
                                <Text
                                    style={styles.cardText}
                                >
                                    Escola
                                </Text>
                            </View>

                            <View style={styles.statusBarContainer}>

                                {/* Porcentagem StatusBar, implementar função*/}
                                <Image
                                source={require("../src/templates/image/modulos/lockWhite.png")}
                                >

                                </Image>

                                {/* StatusBar, implementar função para funcionar*/}
                                <View style={styles.statusBar} />
                            </View>

                            {/* Medalha de conclusão, implementar função para mudar*/}
                            <Image
                                source={require("../src/templates/image/modulos/medalha.png")}
                                style={{ width: 60, height: 60, marginTop: 15 }}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>

                    </View>

                </View>

            </View>
        </ScrollView>
    );
}

export default HomeScreen;
