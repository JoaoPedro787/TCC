import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
    baseText: {
        fontFamily: 'Roboto-Bold',
        color:'#ffffffff',
     
    },
    base_button:{
        width:300,
        borderRadius:20,
        alignItems:'center',
        flexDirection:'row',
        borderWidth:0.5,
        elevation:10
    },
  });

const styles = StyleSheet.create({
    text:{
        ...baseStyle.baseText,
        color:'#ffad0d',
        alignSelf:'flex-start',
    },
    orangeText:{
        ...baseStyle.baseText,
        color:'#ffad0d',
        alignSelf:'flex-start',
        paddingLeft:10,
        fontSize:28
    },
    containerText:{
        ...baseStyle.baseText,
        color:'gray',
        fontSize:20,
    },
    cardText:{
        ...baseStyle.baseText,
        color:'#ffffffff',
        fontSize:16
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffffff',
      },
    profileContainer:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        padding:20
    },
    line:{
        marginTop:10,
        borderWidth:1.5,
        borderColor:'gray',
        width:'100%',
    },
    cardContainer:{
        alignItems:'center',
        backgroundColor:'#e9e9e9',
        width:'100%',
        padding:5,
        gap:30,
        borderRadius:15
    },
    card:{
        width:'90%',
        flexDirection:'row',
        backgroundColor:'#3580f9',
        padding:10,
        borderRadius:10,
        elevation:10,
        alignItems:'center'
    },
    image_container:{
        flexDirection:'column',
        marginRight:20
    },
    statusBarContainer:{
        flexDirection:'column',
        alignItems:'center',

    },
    statusBar:{
        width:150,
        backgroundColor:'#e9e9e9',
        height:20,
        marginTop:10

    }
    
})

export default styles;