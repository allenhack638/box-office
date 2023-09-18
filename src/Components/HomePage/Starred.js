import React from "react";
import { useCustomHook } from "../customHooks/usePerreducer";
import { getShowByIds } from "../../api/apicalls";
import { useQuery } from "@tanstack/react-query";
import ShowGrid from "../shows/ShowGrid";
import { TextCenter } from "../Globalcss/TextCenter";

const Starred = () => {
  const [starredShows] = useCustomHook();

  const { data: apiData, error } = useQuery({
    queryKey: ["search", starredShows],
    queryFn: () =>
      getShowByIds(starredShows).then((result) =>
        result.map((show) => ({ show }))
      ),
    refetchOnWindowFocus: false,
  });
  if (apiData?.length > 0) {
    return <ShowGrid shows={apiData} />;
  }
  if (apiData?.length === 0) {
    return <TextCenter>No Starred Shows!!</TextCenter>;
  }
  if (error) {
    return <TextCenter>Error occurred: {error.message}</TextCenter>;
  }
  return <TextCenter>Loading...</TextCenter>;
};

export default Starred;
