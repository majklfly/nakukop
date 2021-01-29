import React from "react";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";

import { RemoveButton } from "./removeButton";

const DataContainer = styled.div`
  height: 60%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomCard = styled(Card)`
  width: 100px;
  min-width: 250px;
  margin-right: 5px;
  padding-bottom: 2%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3%;
  border-radius: 10px;
`;

const CustomTypography = styled.h4`
  font-size: clamp(15px, 0.4vw, 20px);
`;

interface props {
  item: any[];
  amount: number;
}

export const CartCard: React.FC<props> = ({ item, amount }) => {
  return (
    <CustomCard>
      <DataContainer>
        <CustomTypography>{item}</CustomTypography>
        <CardActions>{amount}x</CardActions>
      </DataContainer>
      <ButtonContainer>
        <RemoveButton item={item} />
      </ButtonContainer>
    </CustomCard>
  );
};
