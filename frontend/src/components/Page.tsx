import { Box } from "@mui/material";
import React, { forwardRef } from "react";
import Helmet from "./Helmet";

interface IPageProps {
  title: string;
  children?: React.ReactNode;
  meta?: React.ReactNode;
}

// eslint-disable-next-line react/display-name, @typescript-eslint/no-unused-vars
const Page = forwardRef(({ children, title, meta, ...other }: IPageProps, ref) => (
  <React.Fragment>
    <Helmet title={title}>
      <Box ref={ref} {...other}>
        {children}
      </Box>
    </Helmet>
  </React.Fragment>
));

export default Page;
