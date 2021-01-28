import React, { useEffect } from "react";

import styled from "styled-components";

import { RootState } from "../redux/reducers/rootReducer";
import { useSelector } from "react-redux";

import { CartCard } from "./CartCard";

const Container = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    width: 1px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar:vertical {
    display: none;
  }
  ::-webkit-scrollbar:horizontal {
    width: 1px;
  }
`;

interface props {}

export const CardSlider: React.FC<props> = () => {
  const { cartItems } = useSelector((state: RootState) => state.cartReducer);

  useEffect(() => {
    if (cartItems) {
      cartItems.map((item) => console.log(item));
    }
  }, [cartItems]);

  return (
    <Container>
      {cartItems.map((item) => {
        return <CartCard name={item[0]} />;
      })}
    </Container>
  );
};
