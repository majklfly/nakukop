import React, { useState, useEffect } from "react";

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
  const [goods, setGoods] = useState<object[]>([]);
  const { data } = useSelector((state: RootState) => state.globalReducer);
  const state = useSelector((state: any) => state.dataReducer);

  useEffect(() => {
    if (state) {
      setGoods([]);
      for (let key in state) {
        setGoods((prev) => [...prev, state[key]]);
      }
    }
  }, [state]);

  return (
    <Container>
      {data.res[1] && <Acc mapping={data.res[1]} id={1} goods={goods} />}
      {data.res[2] && <Acc mapping={data.res[2]} id={2} goods={goods} />}
      {data.res[5] && <Acc mapping={data.res[5]} id={5} goods={goods} />}
      {data.res[8] && <Acc mapping={data.res[8]} id={8} goods={goods} />}
      {data.res[10] && <Acc mapping={data.res[10]} id={10} goods={goods} />}
      {data.res[15] && <Acc mapping={data.res[15]} id={15} goods={goods} />}
    </Container>
  );
};
