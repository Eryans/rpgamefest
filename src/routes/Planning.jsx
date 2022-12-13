import { Divider, List, ListItem, Paper } from "@mui/material";
import { days, planningData } from "../data/planningData";

const PlanningCard = ({ title, date, peoples, description }) => {
  return (
    <Paper className="planning-card">
      <p>
        {date.day} {date.hour}
      </p>
      <h3>{title}</h3>
      <div>
        <p>
          {peoples.map((people, i) => (
            <span key={people + i}>{people}&nbsp;</span>
          ))}
        </p>
      </div>
      <div>{description}</div>
    </Paper>
  );
};

const Planning = () => {
  return (
    <>
      <h1>Planning</h1>
      <h2>Premier jour</h2>
      <List>
        {planningData.map((data, i) => {
          if (data.date.day === days[0])
            return (
              <ListItem key={data.title + i}>
                <PlanningCard
                  title={data.title}
                  date={data.date}
                  peoples={data.peoples}
                  description={data.description}
                />
              </ListItem>
            );
        })}
      </List>
      <Divider/>
      <h2>Deuxième jour</h2>
      <List>
        {planningData.map((data, i) => {
          if (data.date.day === days[1])
            return (
              <ListItem key={data.title + i}>
                <PlanningCard
                  title={data.title}
                  date={data.date}
                  peoples={data.peoples}
                  description={data.description}
                />
              </ListItem>
            );
        })}
      </List>
    </>
  );
};

export default Planning;
