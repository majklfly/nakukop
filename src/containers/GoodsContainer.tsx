import React from "react";

import { Acc } from "../components/Accordion";

import styled from "styled-components";

import { RootState } from "../redux/reducers/rootReducer";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  overflow: scroll;
  max-width: 1500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
`;

interface props {}

export const GoodsContainer: React.FC<props> = (props) => {
  const { data } = useSelector((state: RootState) => state.globalReducer);

  return (
    <Container>
      {data.res[1] && <Acc mapping={data.res[1]} id={1} />}
      {data.res[2] && <Acc mapping={data.res[2]} id={2} />}
      {data.res[5] && <Acc mapping={data.res[5]} id={5} />}
      {data.res[8] && <Acc mapping={data.res[8]} id={8} />}
      {data.res[10] && <Acc mapping={data.res[10]} id={10} />}
      {data.res[15] && <Acc mapping={data.res[15]} id={15} />}
    </Container>
  );
};
