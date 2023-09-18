import ShowCard from "./ShowCard";
import { FlexGrid } from "../Globalcss/FlexGrid";
import { useCustomHook } from "../customHooks/usePerreducer";

const ShowGrid = ({ shows }) => {
  const [starredShows, dispatchStarred] = useCustomHook();

  const onStarClick = (showId) => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarred({ type: "UNSTAR", showId });
    } else {
      dispatchStarred({ type: "STAR", showId });
    }
  };

  return (
    <FlexGrid>
      {shows.map((item) => (
        <ShowCard
          key={item.show.id}
          name={item.show.name}
          image={
            item.show.image
              ? item.show.image.medium
              : "https://as2.ftcdn.net/v2/jpg/04/00/24/31/1000_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
          }
          summary={item.show.summary}
          id={item.show.id}
          starButton={onStarClick}
          isStarred={starredShows.includes(item.show.id)}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;
