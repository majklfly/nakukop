import React, { useState, useEffect } from "react";
import styled from "styled-components";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const MainContainer = styled(List)`
  width: 100%;
`;

interface item {
  B?: boolean;
  C?: number;
  CV?: null;
  G?: number;
  P?: number;
  Pl?: null;
  T?: number;
}

interface props {
  data?: object[];
  mapping?: any;
}

export const CustomList: React.FC<props> = ({ data, mapping }) => {
  const [items, setItems] = useState<any[][]>([]);

  useEffect(() => {
    if (data && items.length === 0) {
      data.forEach((item: item) => {
        const value = item.T;
        if (mapping && value) {
          setItems((prev) => [...prev, [mapping[value].N, item.C, item.P]]);
        }
      });
    }
  }, [data]);

  return (
    <MainContainer aria-label="goods for sale">
      {items &&
        items.map((item) => {
          return (
            <ListItem button onClick={() => {}}>
              <ListItemIcon>{item[2]} x</ListItemIcon>
              <ListItemText primary={item[0]} />
              <ListItemSecondaryAction>{item[1]} ₽</ListItemSecondaryAction>
            </ListItem>
          );
        })}
    </MainContainer>
  );
};
