import Button from "@/components/button";
import Titulo from "@/components/title";

export default function home(){
    function boton(){
        console.log("funciono")
    }
    return(
        <>
            <Titulo text = "Classroom"/>
            <Button onClick = {boton} text="Matematica"/>
            <Button onClick = {boton} text="Historia"/>
            <Button onClick = {boton} text="Programación"/>
            <Button onClick = {boton} text="Lengua"/>
        </>
    )
}