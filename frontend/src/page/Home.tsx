import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import { Page } from "~/components";
import { GET_SUGGESTED_PRODUCTS } from "~/graphql/queries";
import { PreLoading } from "~/layouts/components";
import { ProductList } from "~/models";
import { HomeCart, HomeFeature, HomeGuide, HomeMain } from "~/modules/Landing";

function Home() {
  const { loading, data } = useQuery<{ getProducts: ProductList }>(GET_SUGGESTED_PRODUCTS);
  const suggestedProducts = data?.getProducts.data;
  return (
    <Page title="Trang Chủ">
      {loading ? (
        <PreLoading />
      ) : (
        <Fragment>
          <HomeMain />
          <HomeGuide />
          <HomeCart />
          <HomeFeature products={suggestedProducts || []} />
        </Fragment>
      )}
    </Page>
  );
}
export default Home;
