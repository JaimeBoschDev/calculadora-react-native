import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme';

interface Props {
    texto:string;
    color?:string;
    ancho?:boolean;
    accion: ( ContruyeNumero: string) => void;
}


export const BotonCalcScreen = ({texto, color='#2D2D2D', ancho=false, accion} : Props) => {
return (
    <TouchableOpacity
        onPress={ ()=> accion(texto)}
    >
            <View style={{...stylesGlobal.boton, backgroundColor:color, width: (ancho)? 160: 70} }>
                 <Text style={{...stylesGlobal.botonTexto, color: (color==="#9B9B9B")? 'black': 'white'}}> {texto} </Text>
            </View>
    </TouchableOpacity>

)
}
