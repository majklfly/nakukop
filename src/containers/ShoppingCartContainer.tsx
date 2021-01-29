import React from "react";
import styled from "styled-components";

import { CardSlider } from "../components/CardSlider";
import { TotalCart } from "../components/TotalCart";

const Container = styled.section`
  width: 90vw;
  max-width: 1000px;
  border-radius: 15px;
  height: 15vh;
  position: relative;
  min-height: 120px;
  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  background-color: lightgrey;
  box-shadow: 0px 0px 5px 0px black;
`;

export const ShoppingCartContainer = () => {
  return (
    <Container>
      <CardSlider />
      <TotalCart />
    </Container>
  );
};
