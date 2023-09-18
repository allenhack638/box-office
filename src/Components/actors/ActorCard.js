import { SearchCard, SearchImgWrapper } from "../Globalcss/SearchCard";
const ActorCard = ({
  actor: { name, image, gender, country, deathday, birthday },
}) => {
  console.log(country)
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img
          src={
            image
              ? image.medium
              : "https://as2.ftcdn.net/v2/jpg/04/00/24/31/1000_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
          }
          alt={name}
        />
      </SearchImgWrapper>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>
      <p>{country ? `Comes from ${country.name}` : "No country known"}</p>
      {!!birthday && <p>Born {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : "Alive"}</p>
    </SearchCard>
  );
};
export default ActorCard;
