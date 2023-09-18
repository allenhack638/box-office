import { useState } from "react";
import { searchShows, searchPeople } from "../../api/apicalls";
import { useStateString } from "../customHooks/usePerString";
import ShowGrid from "../shows/ShowGrid";
import ActorsGrid from "../actors/ActorsGrid";
import { useQuery } from "@tanstack/react-query";
import CustomRadio from "../CustomRadio.js/CustomRadio";
import styled from "styled-components";
import { TextCenter } from "../Globalcss/TextCenter";

const Home = () => {
  const [inputValue, setinputValue] = useStateString();
  const [searchOption, setSearchOption] = useState("shows");

  const [filter, setFilter] = useState(null);
  const { data: apiData, error } = useQuery({
    queryKey: ["search", filter],
    queryFn: () =>
      filter.searchOption === "shows"
        ? searchShows(filter.inputValue)
        : searchPeople(filter.inputValue),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const searchHandler = async (e) => {
    e.preventDefault();
    setFilter({ inputValue, searchOption });
  };

  const loadApiData = () => {
    if (error) {
      return <TextCenter>Error occured: {error.message}</TextCenter>;
    }

    if (apiData?.length === 0) {
      return <TextCenter>No results!</TextCenter>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={searchHandler}>
        <SearchInput
          type="text"
          onChange={(e) => setinputValue(e.target.value)}
          value={inputValue}
          placeholder="Searching for ..."
        />
        <RadiosWrapper>
          <CustomRadio
            label="Shows"
            name="search-option"
            value="shows"
            checked={searchOption === "shows"}
            onChange={(e) => setSearchOption(e.target.value)}
          />
          <CustomRadio
            label="Actors"
            name="search-option"
            value="actors"
            checked={searchOption === "actors"}
            onChange={(e) => setSearchOption(e.target.value)}
          />
        </RadiosWrapper>

        <SearchButtonWrapper>
          <button type="submit">Search</button>
        </SearchButtonWrapper>
      </form>
      <div>{loadApiData()}</div>
    </div>
  );
};

export default Home;

const SearchInput = styled.input`
  display: block;
  font-family: "Roboto", sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;
export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
