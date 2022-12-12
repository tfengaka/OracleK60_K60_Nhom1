import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { useLocation } from "react-router";
import { Page } from "~/components";
import { GET_PRODUCT_CATEGORY } from "~/graphql/queries";
import { PreLoading } from "~/layouts/components";
import BreadcrumbProduct from "~/modules/Products/BreadcrumbProduct";
import ProductFilter from "~/modules/Products/ProductFilter";
import ProductList from "~/modules/Products/ProductList";

function Products() {
  const location = useLocation();
  const categoryData = location.state;
  const [pageNumber, setPageNumber] = useState(0);
  const [filterId, setFilterId] = useState(categoryData ? categoryData.alias : []);

  const { loading, error, data } = useQuery(GET_PRODUCT_CATEGORY, {
    variables: {
      categoryAliases: filterId,
      page: pageNumber,
      size: 12,
    },
  });

  const [filterName, setFilterName] = useState(categoryData ? categoryData.name : "Tất cả sản phẩm");
  if (error) {
    console.error(error.message);
  }

  return (
    <Page title="Sản phẩm">
      {loading ? (
        <PreLoading />
      ) : (
        <Box sx={{ marginInline: 10, marginBlock: 3 }}>
          <BreadcrumbProduct name={filterName} setFilterId={setFilterId} setFilterName={setFilterName} />
          <Stack direction="row">
            <ProductFilter
              data={data?.getCategory}
              setFilterName={setFilterName}
              setFilterId={setFilterId}
              setPageNumber={setPageNumber}
            />
            <ProductList
              data={data?.getProducts.data}
              pagination={data?.getProducts.pagination}
              filterName={filterName}
              setPageNumber={setPageNumber}
            />
          </Stack>
        </Box>
      )}
    </Page>
  );
}

export default Products;
