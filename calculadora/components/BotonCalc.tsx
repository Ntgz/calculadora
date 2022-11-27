import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface Props {
    texto:string;
    color?:string;
    ancho?: boolean;
    accion: ( numeroTexto:string ) => void;
}

const BotonCalc = ({texto, color = '#2D2D2D', ancho=false, accion }: Props) => {
    return (
        <TouchableOpacity 
            onPress={ () => accion( texto )}
        >
            <View style={ {...styles.boton,
                backgroundColor:color,
                width: ( ancho ) ? 180 : 80
            }}>
                <Text style={styles.botonTexto}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BotonCalc

const styles = StyleSheet.create({
    fondo: {
    flex: 1,
    backgroundColor: '#fff',
},
calculadoracontainer:{
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal:20,
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
    backgroundColor:'',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10
},
botonTexto:{
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: '#fff',
    fontWeight: '300'

},
fila:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:18,
    paddingHorizontal: 10
},

});
