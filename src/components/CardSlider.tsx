import React, { useEffect, useState } from "react";

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
  const [cards, setCards] = useState<any[]>([]);
  const state = useSelector((state: RootState) => state.cartReducer);

  useEffect(() => {
    // maping over redux store, creating a object of inuque objects and amount, updading state with new object
    if (state) {
      setCards([]);
      Object.keys(state).forEach((key) => {
        const item = state[key];
        setCards((prev) => [...prev, item]);
      });
    }
  }, [state]);

  return (
    <Container>
      {cards.map((item) => {
        if (item.items && item.amount > 0) {
          return <CartCard item={item.items} amount={item.amount} />;
        }
      })}
    </Container>
  );
};
