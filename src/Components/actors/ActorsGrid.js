import ActorCard from "./ActorCard";
import { FlexGrid } from "../Globalcss/FlexGrid";

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map((item, index) => (
        <ActorCard key={index} actor={item?.person} />
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;
