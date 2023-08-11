import React from 'react'
import {Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme';
import { BotonCalcScreen } from '../components/BotonCalcScreen';
import { useCalculadora } from '../../hooks/useCalculadora';


export const CalculadoraScreen = () => {

    const { numeroResultadoAnterior
        ,numeroResultado
        ,Limpiar
        ,PositivoNegativo
        ,BotonDel
        ,BtnDividir
        ,ContruyeNumero
        ,BtnMultiplicar
        ,BtnRestar
        ,BtnSumar
        ,BtnCalcular} = useCalculadora();
   

return (
    <View style={stylesGlobal.containerCalculadora}>
        {
            ( numeroResultadoAnterior !== "0" ) && (<Text style={stylesGlobal.textoResultadoMenor}>{ numeroResultadoAnterior }</Text> )
        }

         <Text style={stylesGlobal.textoResultado}
            numberOfLines={1}
            adjustsFontSizeToFit
         >
            {numeroResultado}
         </Text>
         
         <View style={stylesGlobal.fila}>
            <BotonCalcScreen texto='C' color='#9B9B9B' accion={Limpiar} />
            <BotonCalcScreen texto='+/-' color='#9B9B9B' accion={PositivoNegativo} />
            <BotonCalcScreen texto='Del' color='#9B9B9B' accion={BotonDel} />
            <BotonCalcScreen texto='/' color='#FF9427' accion={BtnDividir} />
         </View>

         <View style={stylesGlobal.fila}>
            <BotonCalcScreen texto='7' accion={ContruyeNumero}  />
            <BotonCalcScreen texto='8'  accion={ContruyeNumero} />
            <BotonCalcScreen texto='9'  accion={ContruyeNumero} />
            <BotonCalcScreen texto='X' color='#FF9427' accion={BtnMultiplicar} />
         </View>

         <View style={stylesGlobal.fila}>
            <BotonCalcScreen texto='4'  accion={ContruyeNumero}  />
            <BotonCalcScreen texto='5'  accion={ContruyeNumero} />
            <BotonCalcScreen texto='6'  accion={ContruyeNumero}  />
            <BotonCalcScreen texto='-' color='#FF9427' accion={BtnRestar} />
         </View>

         <View style={stylesGlobal.fila}>
            <BotonCalcScreen texto='1'  accion={ContruyeNumero}  />
            <BotonCalcScreen texto='2'  accion={ContruyeNumero}  />
            <BotonCalcScreen texto='3'  accion={ContruyeNumero}  />
            <BotonCalcScreen texto='+' color='#FF9427' accion={BtnSumar} />
         </View>

         <View style={stylesGlobal.fila}>
            <BotonCalcScreen texto='0' ancho   accion={ContruyeNumero} />
            <BotonCalcScreen texto='.'  accion={ContruyeNumero}  />
            <BotonCalcScreen texto='=' color='#FF9427' accion={BtnCalcular} />
         </View>
    </View>
)
}
