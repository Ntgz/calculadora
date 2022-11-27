import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import BotonCalc from '../components/BotonCalc';
import useCalculadora from '../hooks/useCalculadora';


const CalculadoraScren = () => {
    const {numeroanterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        armarNumero,
        calcular, } = useCalculadora();


    return (

        <View style={styles.calculadoracontainer}>
            {
                (
                    numeroanterior !=='0'
                ) && (
                    <Text style={styles.resultadoPequeno}>{numeroanterior}</Text>
                )
            }

            
            <Text style={styles.resultado}
            numberOfLines={1}
            adjustsFontSizeToFit={true}>{numero}</Text>
            <View style={styles.fila}>
                    <BotonCalc texto = "c" color="#9B9B9B" accion={limpiar}/>
                    <BotonCalc texto = "+/-" color="#9B9B9B" accion={positivoNegativo}/>
                    <BotonCalc texto = "del" color="#9B9B9B" accion={btnDelete}/>
                    <BotonCalc texto = "/" color="#FF9427" accion={btnDividir}/>
            </View>
            <View style={styles.fila}>
                    <BotonCalc texto = "7" accion={armarNumero}/>
                    <BotonCalc texto = "8" accion={armarNumero}/>
                    <BotonCalc texto = "9" accion={armarNumero}/>
                    <BotonCalc texto = "x" color="#FF9427" accion={btnMultiplicar}/>
            </View>
            <View style={styles.fila}>
                    <BotonCalc texto = "4" accion={armarNumero}/>
                    <BotonCalc texto = "5" accion={armarNumero}/>
                    <BotonCalc texto = "6" accion={armarNumero}/>
                    <BotonCalc texto = "-" color="#FF9427" accion={btnRestar}/>
            </View>
            <View style={styles.fila}>
                    <BotonCalc texto = "1" accion={armarNumero}/>
                    <BotonCalc texto = "2" accion={armarNumero}/>
                    <BotonCalc texto = "3" accion={armarNumero}/>
                    <BotonCalc texto = "+" color="#FF9427" accion={btnSumar}/>
            </View>
            <View style={styles.fila}>
                    <BotonCalc texto = "0" ancho accion={armarNumero}/>
                    <BotonCalc texto = "." accion={armarNumero}/>
                    <BotonCalc texto = "=" color="#FF9427" accion={calcular}/>
            </View>
        </View>

    )
}

export default CalculadoraScren

const styles = StyleSheet.create({
    fondo: {
    flex: 1,
    backgroundColor: '#fff',
},
calculadoracontainer:{
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal:20,
    backgroundColor: '#000',
},
resultado:{
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10
},
resultadoPequeno:{
    color: 'white',
    fontSize:30,
    textAlign: 'right',
},
boton:{
    height:80,
    width:80,
    backgroundColor:'#fff',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10
},
botonTexto:{
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300'

},
fila:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:18,
    paddingHorizontal: 10
},

});
