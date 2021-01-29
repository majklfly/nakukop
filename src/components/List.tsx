import React, { useState, useEffect } from "react";
import styled from "styled-components";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { updateData } from "../redux/slices/dataSlice";

import { RootState } from "../redux/reducers/rootReducer";
import { useSelector } from "react-redux";

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
  const [colors, setColors] = useState<string[]>([]);
  const state = useSelector((state: RootState) => state.dataReducer);

  useEffect(() => {
    setColors([]);
    items.forEach((item) => {
      let color: string = "";
      state[item[7]].C > item[1] ? (color = "red") : (color = "green");
      setColors((prev) => [...prev, color]);
    });
  }, [state]);

  const dispatch = useDispatch();

  const add = (good: any) => {
    //adding each item to the cart on click
    dispatch(addToCart({ cartItems: good, total: good[1] }));
    dispatch(updateData({ good }));
  };

  useEffect(() => {
    //adding names and relevant values to the each good and adding to the local state
    if (data) {
      setItems([]);
      data.forEach((item: item) => {
        const value = item.T;
        const stock = item.P;
        if (value && mapping[value] && stock && stock > 0) {
          setItems((prev) => [
            ...prev,
            [
              mapping[value].N,
              item.C,
              item.P,
              item.B,
              item.CV,
              item.G,
              item.Pl,
              item.T,
            ],
          ]);
        }
      });
    }
  }, [data]);

  return (
    <MainContainer aria-label="goods for sale">
      {items &&
        items.map((item, index) => {
          return (
            <ListItem button onClick={() => add(item)}>
              <ListItemIcon>{item[2]} x</ListItemIcon>
              <ListItemText primary={item[0]} />
              <ListItemSecondaryAction style={{ color: colors[index] }}>
                {item[1]} ₽
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
    </MainContainer>
  );
};
