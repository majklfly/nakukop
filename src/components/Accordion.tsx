import React from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
  mapping: {
    G?: string;
    B?: object;
  };
  id: number;
  goods: object[];
}

export const Acc: React.FC<props> = ({ mapping, goods }) => {
  // Accordion containing list of relevant goods,

  return (
    <MainContainer>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{mapping.G}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <CustomTypography>
          <CustomList data={goods} mapping={mapping.B} />
        </CustomTypography>
      </AccordionDetails>
    </MainContainer>
  );
};
