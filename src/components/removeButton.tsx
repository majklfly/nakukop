import React from "react";

import Button from "@material-ui/core/Button";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { updateCart } from "../redux/slices/cartSlice";
import { incrementStock } from "../redux/slices/dataSlice";

interface props {
  item: any[];
}

export const RemoveButton: React.FC<props> = ({ item }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(updateCart({ cartItems: item, total: 0 }));
    dispatch(incrementStock({ item: item }));
  };

  return <Button onClick={() => removeItem()}>Remove</Button>;
};
