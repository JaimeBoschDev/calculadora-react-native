import { useRef, useState } from "react";

enum Operadores{
    sumar, restar, multiplicar, dividir
}

export const  useCalculadora = () => {

  

    const [numeroResultado, setNumeroResultado] = useState('0')
    const [numeroResultadoAnterior, setNumeroResultadoAnterior] = useState('0')

    const ultimoOperador = useRef<Operadores>();

    const Limpiar = () =>{
        setNumeroResultado('0');
        setNumeroResultadoAnterior('0');
    }

    const ContruyeNumero = (textoPresionado : string) =>{

        //Validamos no tener puntos dobles ".."
        if(textoPresionado === "." && numeroResultado.includes(".")) return;

        if(numeroResultado.startsWith("0") || numeroResultado.startsWith("-0")){

            //Punto decimal
            if(textoPresionado ===".")
                setNumeroResultado(numeroResultado + textoPresionado)
            //Evaluar si hay otro cero y hay un punto
            else if(textoPresionado==="0" && numeroResultado.includes("."))
                setNumeroResultado(numeroResultado + textoPresionado)
            //Evaluar si es diferente a 0 y no tiene un punto
            else if(textoPresionado !=="0" && !numeroResultado.includes("."))
                setNumeroResultado(textoPresionado)
            //Evaluar los 0000
            else if( numeroResultado==="0" && !numeroResultado.includes("."))
                setNumeroResultado(numeroResultado)
            else
                setNumeroResultado(numeroResultado + textoPresionado)
        }
        else
            setNumeroResultado(numeroResultado + textoPresionado)

    }

    const PositivoNegativo = () =>{
        if(numeroResultado.includes("-"))
            setNumeroResultado(numeroResultado.replace("-",""));
        else
            setNumeroResultado("-"+ numeroResultado);
    }

    const BotonDel = () =>{
        let negativo='';
        let numeroTemp = numeroResultado;

        if(numeroResultado.includes("-")){
            negativo="-";
            numeroTemp = numeroResultado.substring(1);
        }
        
        if(numeroTemp.length >1)
            setNumeroResultado(negativo + numeroTemp.slice(0,-1));
        else
            setNumeroResultado("0");
    }

    const GuardaCifraAnterior = () =>{
        if(numeroResultado.endsWith("."))
            setNumeroResultadoAnterior(numeroResultado.replace(".",""));
        else
            setNumeroResultadoAnterior(numeroResultado);
        setNumeroResultado("0");
    }

    const BtnSumar = ()=>{
        GuardaCifraAnterior();
        ultimoOperador.current = Operadores.sumar;
    }

    const BtnRestar = ()=>{
        GuardaCifraAnterior();
        ultimoOperador.current = Operadores.restar;
    }

    const BtnDividir = ()=>{
        GuardaCifraAnterior();
        ultimoOperador.current = Operadores.dividir;
    }

    const BtnMultiplicar = ()=>{
        GuardaCifraAnterior();
        ultimoOperador.current = Operadores.multiplicar;
    }

    const BtnCalcular = () =>{
        let num1 = Number(numeroResultado);
        let num2 = Number(numeroResultadoAnterior);

        switch (ultimoOperador.current) {
            case Operadores.sumar:
                setNumeroResultado(`${ num1 + num2  }`);
                break;
            
            case Operadores.restar:
                    setNumeroResultado(`${  num2 - num1 }`);
                    break;
             
            case Operadores.multiplicar:
                    setNumeroResultado(`${  num2 * num1 }`);
                    break;               
           
            case Operadores.dividir:
                    setNumeroResultado(`${  num2 / num1 }`);
                    break;    
        }

        setNumeroResultadoAnterior("0");
    }

    return {
        numeroResultadoAnterior
        ,numeroResultado
        ,Limpiar
        ,PositivoNegativo
        ,BotonDel
        ,BtnDividir
        ,ContruyeNumero
        ,BtnMultiplicar
        ,BtnRestar
        ,BtnSumar
        ,BtnCalcular
    }
}

