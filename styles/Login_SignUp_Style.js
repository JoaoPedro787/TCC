// styles.js
import {StyleSheet } from 'react-native';

const baseStyle = StyleSheet.create({
    baseText: {
        fontFamily: 'Roboto-Bold',
        color:'#000000',
     
    },
    base_button:{
        width:350,
        backgroundColor:'#dfe1e0',
        borderWidth:1.5,
        borderRadius:15,
        alignItems:'center',
        padding:10,
        flexDirection:'row'
        
    }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffffff',
    gap:30,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: 'gray', // Cor da linha
  },
  lineText: {
    color:'gray',
    marginHorizontal:10
  },
  title: {
    ...baseStyle.baseText,
    fontSize: 26,
    marginTop:50,
  },
  input:{
    ...baseStyle.base_button,
    height:60,
    justifyContent:'space-between',
  },
  blue_button:{
    ...baseStyle.base_button,
    backgroundColor:'#3580f9',
    borderWidth:0,
    padding:12,
    justifyContent:'center',
  },
  white_button:{
    ...baseStyle.base_button,
    backgroundColor:'#ffffffff',
    borderWidth:0.3,
    elevation:10,
    flexDirection:'row',
    justifyContent:'space-evenly',
    width:300

  },
  subtitle:{
    ...baseStyle.baseText,
    color:'#ffffffff',
    fontSize:20,
  },
  blue_text:{
    color:'#3580f9'
  },
  ico:{
    width:40,
    height:40
  },
});

export default styles;
