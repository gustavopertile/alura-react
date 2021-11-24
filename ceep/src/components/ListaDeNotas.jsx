import React from "react";
import { Component } from "react";
import CardNota from "./CardNota";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        {console.log("Aqui é uma tag JS")}
        {Array.of("Trabalho", "Trabalho", "Estudos").map(categoria => {
          return (
            <li>
              <div>{categoria}</div>
              <CardNota />
            </li>
          )
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;