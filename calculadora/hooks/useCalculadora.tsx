import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

enum Operadores {
    sumar, resta, multiplicar, dividir
}

const useCalculadora = () => {
    
        const [numeroanterior, setnumeroanterior] = useState('0');
        const [numero, setnumero] = useState('0');
    
    
        const ultimaOperacion = useRef<Operadores>()
    
        const limpiar = () => {
            setnumero('0');
            setnumeroanterior('0');
        }
    
        const armarNumero= ( numeroTexto:string ) => {
    
            if( numero.includes('.') && numeroTexto === '.') return;
    
            if( numero.startsWith('0') || numero.startsWith('-0')) {
    
                if ( numeroTexto === '.' ) {
                    setnumero( numero + numeroTexto);
                } else if( numeroTexto === '0' && numero.includes('.') ) {
                    setnumero( numero + numeroTexto );
                } else if ( numeroTexto !== '0' && !numero.includes('.')) {
                    setnumero(numeroTexto);
                } else if (numeroTexto === '0' && !numero.includes('.')) {
                    setnumero(numero);
                } else {
                    setnumero(numero + numeroTexto);
                }
            } else {
                setnumero(numero + numeroTexto);
            }
    
            
        }
    
        const positivoNegativo = () => {
            if ( numero.includes('-') ){
                setnumero( numero.replace('-', '') );
    
            } else {
                setnumero( '-' + numero );
            }
        }
    
        const btnDelete = () => {
    
            let negativo = '';
            let numeroTemp = numero;
            if ( numero.includes('-') ) {
                negativo = '-';
                numeroTemp = numero.substr(1);
            }
    
            if ( numeroTemp.length >1 ) {
                setnumero( negativo + numeroTemp.slice(0,-1));
            } else {
                setnumero('0')
            }
    
        }
    
    
        const cambiarNumPorAnterior = () => {
            if( numero.endsWith('.')){
                setnumeroanterior ( numero.slice(0,-1) );
            } else {
                setnumeroanterior ( numero );
            }
            setnumero('0');
            
    
        }
    
        const btnDividir = () => {
            cambiarNumPorAnterior();
            ultimaOperacion.current = Operadores.dividir;
        }
        const btnMultiplicar = () => {
            cambiarNumPorAnterior();
            ultimaOperacion.current = Operadores.multiplicar;
        } 
    
        const btnRestar = () => {
            cambiarNumPorAnterior();
            ultimaOperacion.current = Operadores.resta;
        } 
        const btnSumar = () => {
            cambiarNumPorAnterior();
            ultimaOperacion.current = Operadores.sumar;
        } 
    
        const calcular = () =>{
            const num1 = Number (numero);
            const num2 = Number (numeroanterior);
            switch ( ultimaOperacion.current ) {
                case Operadores.sumar:
                    setnumero( `${num1 + num2}`);
                    
                    break;
                case Operadores.multiplicar:
                    setnumero( `${num1 * num2}`);
                    
                    break;
                case Operadores.dividir:
                    setnumero( `${num2 / num1}`);
                    
                    break;
                case Operadores.resta:
                    setnumero( `${num2 - num1}`);
                    
                    break;    
            
                default:
                    break;
            }
            setnumeroanterior( '0' );
        }

        return {
            numeroanterior,
            numero,
            limpiar,
            positivoNegativo,
            btnDelete,
            btnDividir,
            btnMultiplicar,
            btnRestar,
            btnSumar,
            armarNumero,
            calcular,
        }
    
}

export default useCalculadora
