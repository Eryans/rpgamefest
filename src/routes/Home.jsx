import { Button, Paper } from "@mui/material";

const Home = () => {
  return <div >
    <Button variant="contained" className="enchanted"  style={{width:"100%", marginBottom:"1.5em",backgroundColor:"#E39929", fontSize:"1.5em"}} >Billeterie</Button>
    <img style={{width:"100%"}} src="./../public/images/roliste.jpg" alt="image de roliste" />  
    <p>RPGamming Fest est avant tout un événement de passionnés englobant le temps d’un week-end 
      le meilleur du jeu de rôle. Convention située au cœur de la Normandie, nous proposons des animations
      et ateliers ancrés dans le moderne autant que dans le traditionnel. Que ce soit dans le médiéval
      fantastique, fantasy, chacun peut trouver son univers de prédilection ! <br/><br/>
      Venez découvrir nos activités !</p>
    <Paper style={{borderLeft:"3px solid #3B6B90",backgroundColor:"#E39929",color:"white",marginTop:"1.5em", display:"flex", flexDirection:"column" }} className="home-card">
    <h1 className="enchanted" style={{fontSize:"2em",textAlign:"left",marginBlockStart:"0.5em",marginBlockEnd:"0"}} >Edition 2022</h1>
    <p style={{marginBlockStart:"0.5em"}}>Rpgaming Fest est présent cette année au Parc Exposition de Rouen. Retrouvez nous <span style={{fontWeight:"bold"}}>le 21 et 22 Janvier 2022.</span></p>
    <img style={{width:"10em"}} src="images/parcExpo-removebg-preview.png" alt="Logo du parc exposition" />
    <div> 
    <Button variant="contained" style={{backgroundColor:"#3B6B90"}}>Programme</Button>
    <Button variant="contained" style={{backgroundColor:"#3B6B90"}}>Plan</Button>
    </div>  
    </Paper>
    </div>;
};

export default Home;
