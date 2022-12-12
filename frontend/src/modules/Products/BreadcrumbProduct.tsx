import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { publicRoutes } from "~/routes";
interface BreadcrumbProps {
  data?: string;
  name: string;
  setFilterId?: (value: []) => void;
  setFilterName?: (value: string) => void;
}

function BreadcrumbProduct({ name, data, setFilterId, setFilterName }: BreadcrumbProps) {
  const handleSubmit = () => {
    if (setFilterId && setFilterName) {
      setFilterId([]);
      setFilterName("Tất cả sản phẩm");
    }
  };
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      <Link underline="hover" color="inherit" href={publicRoutes.HOME.path}>
        Trang chủ
      </Link>
      <Link
        component={RouterLink}
        underline="hover"
        color={name === "Tất cả sản phẩm" ? "text.primary" : "inherit"}
        to={publicRoutes.PRODUCT.path}
        state={null}
        onClick={handleSubmit}
      >
        Tất cả sản phẩm
      </Link>
      {name !== "Tất cả sản phẩm" ? (
        data ? (
          <Link
            component={RouterLink}
            underline="hover"
            color="text.primary"
            to={publicRoutes.PRODUCT.path}
            state={data}
          >
            {name}
          </Link>
        ) : (
          <Typography color="text.primary">{name}</Typography>
        )
      ) : (
        ""
      )}
    </Breadcrumbs>
  );
}

export default BreadcrumbProduct;
