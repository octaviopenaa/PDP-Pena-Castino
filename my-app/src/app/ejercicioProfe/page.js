"use client"
import Button from "@/components/button";
import Titulo from "@/components/title";
import { useState } from "react";

export default function ejercicioProfe() {
    let [cuenta, setCuenta] = useState(0)
    function incrementar() {
        setCuenta(cuenta + 1)
    }
    function descontar() {
        setCuenta(cuenta - 1)
    }
    function presionado() {
        if (document.getElementById("checkbox1").checked = true) {
            incrementar();
        } else if (document.getElementById("checkbox1").checked = false) {
            descontar()
        }
    }

    return (
        <>
            <div>
                <Titulo text="Ejercicio Profe" />
                <h2>Puntos: {cuenta}</h2>
                <input type="checkbox" id="checkbox1" value="sumar puntos" />
                <label for="checkbox1">Toque aqui para sumar puntos</label>
            </div>
            <Button onClick={presionado} text="apretame" />
        </>
    )
}