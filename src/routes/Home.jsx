import { Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { ticketLink } from "../../globalData";

const Home = () => {
  var audio = new Audio("uwu-noise.mp3");
  return (
    <div>
      <section className="home-text-block">
        <Button
          variant="contained"
          className="enchanted"
          style={{
            width: "100%",
            marginBottom: "1.5em",
            backgroundColor: "#E39929",
            fontSize: "1.5em",
          }}
        >
          <a style={{color:"white"}} href={ticketLink} target="_blank">
          Billeterie
          </a>
        </Button>
        <img
          src="/images/roliste.jpg"
          alt="image de roliste"
        />
        <p>
          RPGaming Fest est avant tout un événement de passionnés englobant le
          temps d’un week-end le meilleur du jeu de rôle. Convention située au
          cœur de la Normandie, nous proposons des animations et ateliers ancrés
          dans le moderne autant que dans le traditionnel. Que ce soit dans le
          médiéval fantastique, fantasy, chacun peut trouver son univers de
          prédilection ! <br />
          <br />
          Venez découvrir nos activités !
        </p>
      </section>
        <Paper
          style={{
            borderLeft: "3px solid #3B6B90",
            backgroundColor: "#E39929",
            color: "white",
            marginTop: "1.5em",
            display: "flex",
            flexDirection: "column",
          }}
          className="home-card"
        >
          <h1
            className="enchanted"
            style={{
              fontSize: "2em",
              textAlign: "left",
              marginBlockStart: "0.5em",
              marginBlockEnd: "0",
            }}
          >
            Edition 2022
          </h1>
          <p style={{ marginBlockStart: "0.5em" }}>
            Rpgaming Fest est présent cette année au Parc Exposition de Rouen.
            Retrouvez nous{" "}
            <span style={{ fontWeight: "bold" }}>le 21 et 22 Janvier 2022.</span>
          </p>
        <div
          style={{
            display: "flex",
            gap: ".6em",
            justifyContent: "space-between",
            flexWrap: window.innerWidth <= 365 ? "wrap" : "no-wrap"
          }}
        >
          <img
            style={{ width: "10em" }}
            src="/images/parcExpo-removebg-preview.png"
            alt="Logo du parc exposition"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".8em",
              justifyContent: "center",
              width:'100%'
            }}
          >
            <Button
              variant="contained"
              className="enchanted"
              style={{
                backgroundColor: "#3B6B90",
                fontSize: "1.2em",
                width:'100%'
              }}
            >
              <Link style={{ color: "white" }} to="/planning">
                Programme
              </Link>
            </Button>
            <Button
              variant="contained"
              className="enchanted"
              style={{
                backgroundColor: "#3B6B90",
                fontSize: "1.2em",
                width:'100%'
              }}
            >
              <Link style={{ color: "white" }} to="/plan">
                Plan
              </Link>
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Home;
