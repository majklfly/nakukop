import React, { useState, useEffect } from "react";
import styled from "styled-components";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const MainContainer = styled(List)`
  width: 100%;
`;

interface item {
  B: boolean;
  C: number;
  CV: null;
  G: number;
  P: number;
  Pl: null;
  T: number;
}

interface props {
  data?: object[];
}

export const CustomList: React.FC<props> = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <MainContainer aria-label="goods for sale">
      {data &&
        data.map((item) => {
          return (
            <ListItem button onClick={() => {}}>
              <ListItemText primary={51} />
            </ListItem>
          );
        })}
    </MainContainer>
  );
};
