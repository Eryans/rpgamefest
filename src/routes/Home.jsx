import { Paper } from "@mui/material";

const Home = () => {
  return <div>
    <Paper className="home-card">
    <h1>Accueil</h1>
    <p>RPGamming Fest est avant tout un événement de passionnés englobant le temps d’un week-end 
      le meilleur du jeu de rôle. Convention située au cœur Normandie, nous proposons des animations
      et ateliers ancrés dans le moderne autant que dans le traditionnel. Que ce soit dans le médiéval
      fantastique, fantasy, chacun peut trouver son univers de prédilection ! <br/><br/>
      Venez découvrir nos activités !</p>
      <img style={{width:"100%"}} src="./../public/images/roliste.jpg" alt="image de roliste" />
    </Paper>
    </div>;
};

export default Home;
