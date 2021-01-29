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

interface card {
  item: string[];
  amount: number;
}

interface props {}

export const CardSlider: React.FC<props> = () => {
  const [cards, setCards] = useState<any>({});
  const { cartItems } = useSelector((state: RootState) => state.cartReducer);

  useEffect(() => {
    // maping over redux store, creating a object of inuque objects and amount, updading state with new object
    if (cartItems) {
      let cardsObject: any = {};
      cartItems.map((item) => {
        const id = item[1];
        if (cardsObject[id]) {
          const updatedValue = (cardsObject[id].amount += 1);
          cardsObject[id] = { item, amount: updatedValue };
        } else {
          cardsObject[id] = { item, amount: 1 };
        }
      });
      setCards(cardsObject);
    }
  }, [cartItems]);

  return (
    <Container>
      {Object.keys(cards).map((key) => {
        console.log(cards[key].item[0]);
        return (
          <CartCard name={cards[key].item[0]} amount={cards[key].amount} />
        );
      })}
    </Container>
  );
};
