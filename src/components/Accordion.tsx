import React, { useState, useEffect } from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useSelector } from "react-redux";

import styled from "styled-components";

import { CustomList } from "./List";

const CustomTypography = styled(Typography)`
  width: 100%;
`;

const MainContainer = styled(Accordion)`
  width: 100%;
  max-width: 700px;
`;

interface props {
  goods: {
    G?: string;
    B?: object;
  };
  id: number;
}

interface item {
  B: boolean;
  C: number;
  CV: null;
  G: number;
  P: number;
  Pl: null;
  T: number;
}

export const Acc: React.FC<props> = (props) => {
  // Accordion containing list of relevant goods,
  const [goods, setGoods] = useState<object[]>([]);

  const { data } = useSelector((state: any) => state.dataReducer);

  useEffect(() => {
    if (data.data) {
      data.data.Value.Goods.forEach((item: item) => {
        if (item.G === props.id) {
          setGoods((prev) => [...prev, item]);
        }
      });
    }
  }, [data]);

  return (
    <MainContainer>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.goods.G}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <CustomTypography>
          <CustomList data={goods} />
        </CustomTypography>
      </AccordionDetails>
    </MainContainer>
  );
};
