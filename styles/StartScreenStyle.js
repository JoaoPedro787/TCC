// styles.js
import {StyleSheet } from 'react-native';

const baseStyle = StyleSheet.create({
    baseText: {
        fontFamily: 'Roboto-Bold',
        color:'#ffffffff',
     
    },
    base_button:{
        width:300,
        backgroundColor:'#f7ad1a',
        borderRadius:20,
        alignItems:'center',
        padding:13,
        justifyContent:'center',
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
  title: {
    ...baseStyle.baseText,
    fontSize: 60,
  },
  orange_text:{
    color:'#f7ad1a',
  },
  p:{
    ...baseStyle.baseText,
    fontSize:22,
  },
  gif:{
    borderRadius:20,
    width:350
  },
  button:{
    ...baseStyle.base_button,

  },
  white_button:{
    backgroundColor:'#ffffffff',

  }
});

export default styles;
