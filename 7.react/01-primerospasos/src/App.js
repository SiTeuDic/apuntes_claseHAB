import "./App.css";
import room from "./data/room.json";
import products from "./data/products.json";
import characters from "./data/characters.json";

function App() {
  //JSX
  //usamos las {} para usar valiables
  return (
    <>
      {/*  <div className={"App " + (room.available ? "available" : "notavailable")}>
        <h1 className="title">{room.title}</h1>
        <p className="description">{room.description}</p>
        <p className="status">
          {room.available ? "Disponible" : "no disponible"}
        </p>
        Desde solo {room.price}€ por noche.
        <p>
          Servicios:
          <ul>
            {room.services.map((service) => {
              return <li>{service}</li>;
            })}
          </ul>
        </p>
      </div> */}
      {/*  <div>
        <ul>
          {products.map((product) => {
            return (
              <li>
                <article>
                  <h3>{product.title}</h3>
                  <p>{product.price}</p>
                  <p>{product.description}</p>
                  <p>{product.category}</p>
                  <img alt="Imagen producto" src={product.image} />
                </article>
              </li>
            );
          })}
        </ul>
      </div> */}

      <div>
        <ul className="list">
          {characters.map((character) => {
            return (
              <div
                className={
                  "characters " +
                  (characters[0].status === "Alive" ? "Alive" : "Dead")
                }
              >
                <li className="main">
                  <article>
                    <h3 className="name">{character.name}</h3>
                    <ul>
                      <li>
                        <p className="specie">{character.species}</p>
                      </li>
                      <li className="img">
                        <img alt="Characte image" src={character.image} />
                      </li>
                      <li className="status">
                        <p>{character.status}</p>
                      </li>
                    </ul>
                  </article>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
