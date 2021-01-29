import React, { useEffect } from "react";
import styled from "styled-components";

import { GoodsContainer } from "./containers/GoodsContainer";
import { ShoppingCartContainer } from "./containers/ShoppingCartContainer";

import { useDispatch } from "react-redux";
import { updateGoods } from "./redux/slices/nameSlice";
import { getData } from "./redux/slices/dataSlice";

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

interface good {
  B?: boolean;
  C?: number;
  CV?: null;
  G?: number;
  P?: number;
  Pl?: null;
  T?: number;
}

function App() {
  const dispatch = useDispatch();

  const updateRate = async () => {
    // creating new object with data, updading that object and sending to the store
    const data = await require("./data/data.json");
    const randomNumber = Math.floor(Math.random() * 80 + 20);
    const Goods: object[] = [];
    const copy = {
      Error: data.Error,
      Id: data.Id,
      Success: data.Success,
      Value: {
        Goods: Goods,
      },
    };
    data.Value.Goods.forEach((item: good) => {
      const newObject: good = {};
      newObject.B = item.B;
      if (item.C) {
        newObject.C = Math.floor(item.C * (randomNumber / 100));
      }
      newObject.CV = item.CV;
      newObject.G = item.G;
      newObject.P = item.P;
      newObject.Pl = item.Pl;
      newObject.T = item.T;
      Goods.push(newObject);
    });
    dispatch(getData({ copy }));
  };

  setInterval(function () {
    updateRate();
  }, 15000);

  const fetchData = async () => {
    // fetching relevant data and saving in the store
    const res = await require("./data/names.json");
    if (res) {
      dispatch(updateGoods({ res }));
      updateRate();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MainContainer>
      <ShoppingCartContainer />
      <GoodsContainer />
    </MainContainer>
  );
}

export default App;
