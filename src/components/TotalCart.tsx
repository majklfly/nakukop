import React from "react";

import styled from "styled-components";

import { RootState } from "../redux/reducers/rootReducer";
import { useSelector } from "react-redux";

const Container = styled.div`
  position: absolute;
  right: 2%;
  bottom: -40%;
`;

interface props {}

export const TotalCart: React.FC<props> = (props) => {
  const { total } = useSelector((state: RootState) => state.cartReducer);

  return (
    <Container>
      <h1>Total: {total} ₽</h1>
    </Container>
  );
};
