// styles.js
import {StyleSheet } from 'react-native';

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
    icon_container:{
        backgroundColor:"#ffffffff",
        borderRadius:150,
        alignItems:'center',
        justifyContent:'center'

    }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3580f9',
    gap:20,
    padding:30
  },
  card:{
    flexDirection:'row',
    flexWrap:'wrap',
    gap:10

  },
  icon_container:{
    ...baseStyle.icon_container,
    width:190,
    height:190,
  },
  icon:{
    width:230,
    height:230,
  },
  icon_card:{
    width:120,
    height:120,
  },
  icon_card_Container:{
    ...baseStyle.icon_container,
    width:100,
    height:100,
  },
  input:{
    ...baseStyle.base_button,
    padding:5,
    backgroundColor:'#dfe1e0',
    justifyContent:'space-between',
  },
  text:{
    ...baseStyle.baseText,
    alignSelf:'flex-start',
    fontSize:24
  },
  yellow_button:{
    ...baseStyle.base_button,
    backgroundColor:'#ffad0d',
    justifyContent:'center',
    padding:12
  }
});

export default styles;
