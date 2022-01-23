import React from "react";
import SrcVideo from "../assets/video/intro_racing.mp4";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Grid from "../components/Grid";
import Helmet from "../components/Helmet";

const link = [
  {
    display: "Formula 1",
    path: "/formula1",
  },
  {
    display: "Indycar",
    path: "/indycar",
  },
  {
    display: "Esports",
    path: "/esports",
  },
  {
    display: "Extreme E",
    path: "/extreme-e",
  },
];

const Racing = () => {
  console.log(SrcVideo);
  return (
    <Helmet title="Racing">
      <div className="racing">
        <video autoPlay loop muted>
          <source src={SrcVideo} type="video/mp4" />
        </video>
        <div className="racing__btn">
          <Grid col={4} mdCol={2} smCol={2} gap={20}>
            {link.map((item, index) => {
              return (
                <Link to={item.path} key={index}>
                  <Button backgroundColor="orange" size="lg">
                    {item.display}
                  </Button>
                </Link>
              );
            })}
          </Grid>
        </div>
      </div>
    </Helmet>
  );
};

export default Racing;
