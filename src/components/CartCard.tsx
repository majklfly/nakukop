import React from "react";
import styled from "styled-components";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const CustomCard = styled(Card)`
  width: 100px;
  min-width: 250px;
  margin-right: 5px;
  padding-bottom: 2%;
  height: 80%;
  display: flex;
  align-items: center;
  padding: 3%;
  border-radius: 10px;
`;

const CustomTypography = styled.h4`
  font-size: clamp(15px, 0.4vw, 20px);
`;

interface props {
  name: string;
}

export const CartCard: React.FC<props> = ({ name }) => {
  return (
    <CustomCard>
      <CustomTypography>{name}</CustomTypography>
      <CardActions>
        <Button size="small">Remove</Button>
      </CardActions>
    </CustomCard>
  );
};