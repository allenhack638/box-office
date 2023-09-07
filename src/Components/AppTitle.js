import React from "react";

const AppTitle = (props) => {
  const {
    title = "Box Office",
    subtitle = "What's your favorite actor or movie?",
  } = props;
  return (
    <div>
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
};

export default AppTitle;
