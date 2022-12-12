import { Grid, Pagination, Paper, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import { PaginationData, Product } from "~/models";
import ProductItem from "./ProductItem";
interface ProductProps {
  data: Product[];
  pagination: PaginationData;
  filterName: string;
  setPageNumber: (value: number) => void;
}

function ProductList({ data, pagination, filterName, setPageNumber }: ProductProps) {
  const DisplayProducts = data.map((item: Product) => <ProductItem key={item.id} data={item} />);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPageNumber(value - 1);
  };

  return (
    <Grid container spacing={2} columns={{ xs: 8 }}>
      <Grid item xs={8}>
        <Paper>
          <Typography variant="h6" sx={{ p: 2 }}>
            {filterName}
          </Typography>
        </Paper>
      </Grid>
      {DisplayProducts}
      <Grid item xs={8}>
        <Pagination
          count={pagination.totalPages}
          page={pagination.currentPage + 1}
          onChange={handleChange}
          color="primary"
          sx={{ display: "flex", justifyContent: "center" }}
        />
      </Grid>
    </Grid>
  );
}

export default ProductList;
