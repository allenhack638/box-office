import { Link, useParams } from "react-router-dom";
import { getShowById } from "../../api/apicalls";
import { useQuery } from "@tanstack/react-query";
import ShowMainData from "./ShowMainData";
import Details from "./Details";
import Cast from "./Cast";
import Seasons from "./Seasons";
import styled from "styled-components";
import { TextCenter } from "../Globalcss/TextCenter";

const ShowPage = () => {
  const { showId } = useParams();
  const { data: ShowData, error: ShowError } = useQuery({
    queryKey: ["show", showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  if (ShowError) {
    return <TextCenter>We have an error: {ShowError.message}</TextCenter>;
  }
  if (ShowData) {
    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <StyledLink to="/">Go back to Home</StyledLink>
        </BackHomeWrapper>
        <ShowMainData
          image={
            ShowData.image
              ? ShowData.image.original
              : "https://as2.ftcdn.net/v2/jpg/04/00/24/31/1000_F_400243185_BOxON3h9avMUX10RsDkt3pJ8iQx72kS3.jpg"
          }
          name={ShowData.name}
          rating={ShowData.rating}
          summary={ShowData.summary}
          genres={ShowData.genres}
        />
        <InfoBlock>
          <h2>Details</h2>
          <Details
            status={ShowData.status}
            premiered={ShowData.premiered}
            network={ShowData.network}
          />
        </InfoBlock>

        <InfoBlock>
          <h2>Seasons</h2>
          <Seasons seasons={ShowData._embedded.seasons} />
        </InfoBlock>

        <InfoBlock>
          <h2>Casts</h2>
          <Cast cast={ShowData._embedded.cast} />
        </InfoBlock>
      </ShowPageWrapper>
    );
  }

  return <TextCenter>Loading the data... {showId}</TextCenter>;
};

export default ShowPage;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;
const StyledLink = styled(Link)`
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  background-color: lightgray;
  border-radius: 10px;
  margin: 10px;
  &:hover,
  &:focus {
    color: white;
    background-color: gray;
  }
  &:active {
    color: blue;
  }
`;
