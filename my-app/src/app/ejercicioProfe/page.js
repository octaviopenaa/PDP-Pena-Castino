"use client"
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import Titulo from "@/components/title";
import { useState } from "react";

export default function ejercicioProfe() {
    let [cuenta, setCuenta] = useState(0)
    let  [check, setcheck] = useState(false)
    
    function incrementar() {
        setCuenta(cuenta + 1)
    }
    function descontar() {
        setCuenta(cuenta - 1)
    }
    function funcionar(){
        if (check == true){
            incrementar()
        }else{
            descontar()
        }

    }

    function onChange(event){
        console.log(event.target.checked)
        if (event.target.checked == true) {
            setcheck (check = true)
        } else {
            setcheck (check = false)
        }
    }

    return (
        <>
            <div>
                <Titulo text="Ejercicio Profe" />
                <h2>Puntos: {cuenta}</h2>
                <Checkbox onChange={onChange} text="Toque aqui"/>
                <Button onClick={funcionar} text="apretame" />
            </div>
           
        </>
    )
}