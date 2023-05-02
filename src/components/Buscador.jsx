import "./Buscador.css";
import { Buscar } from "./Icons";

function Buscador() {
  return (
    <>
      <h3 className="titulo">
        Mas de 800 pokemones...
        <section className="container-buscar">
          <input
            type="text"
            placeholder="Encuentra tu Pokemon"
            className="input-buscar"
          />
          <button className="btn-buscar">
            <Buscar />
            Buscar Pokemon
          </button>
        </section>
      </h3>
    </>
  );
}

export default Buscador;
