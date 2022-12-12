import { MenuItem, MenuList, Paper, Typography } from "@mui/material";
import { Category } from "~/models";
interface CategoryProps {
  data: Category[];
  setFilterName: (value: string) => void;
  setFilterId: (value: string) => void;
  setPageNumber: (value: number) => void;
}

function ProductFilter({ data, setFilterName, setFilterId, setPageNumber }: CategoryProps) {
  const handleFilter = (item: Category) => {
    setFilterName(item.name);
    setFilterId(item.alias);
    setPageNumber(0);
  };
  return (
    <Paper sx={{ minWidth: 270, maxWidth: 275, height: "20%", mr: 1 }}>
      <MenuList>
        <Typography variant="body1" sx={{ fontWeight: "bold", p: 2 }}>
          Danh mục sản phẩm
        </Typography>

        {data.map((item: Category, index) => (
          <MenuItem key={index} onClick={() => handleFilter(item)}>
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Paper>
  );
}

export default ProductFilter;
