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

function App() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    // fetching relevant data and saving in the store
    const res = await require("./data/names.json");
    const data = await require("./data/data.json");
    if (res) {
      dispatch(updateGoods({ res }));
      dispatch(getData({ data }));
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
