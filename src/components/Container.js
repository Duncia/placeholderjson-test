import React from "react";
//Čia yra bendras layout'as, kuris priima vaikinius elementus.

export default function Container(props){
    return (
        <section className="container">
            {props.children}
        </section>
    )
}