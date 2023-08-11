import { StyleSheet } from 'react-native'

export const stylesGlobal = StyleSheet.create({
    containerCalculadora:{
        padding:16
    },
    boton:{
        backgroundColor:'gray',
        width: 70,
        height:70,
        marginHorizontal:10,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        padding:8
    },
    botonTexto:{
        fontSize:20,
        color:'black',
        fontWeight:'300',
    },
    fila:{
      flexDirection:'row',
      justifyContent:'center',
      marginVertical:8
    },
    fondo:{
        backgroundColor:'black',
        flex:1,
        justifyContent:'flex-end'
    },
    textoResultado:{
        fontSize:50,
        color:'white',
        textAlign:'right'
    },
    textoResultadoMenor:{
        fontSize:30,
        color:'white',
        opacity:0.5,
        textAlign:'right'
    },
  
});

