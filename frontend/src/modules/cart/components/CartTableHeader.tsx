import { styled, TableCell, TableHead, TableRow } from "@mui/material";
import { ITableHeadCell } from "../CartTable";

interface ICartTableHeader {
  titles: ITableHeadCell[];
}
const TableCellHeadStyled = styled(TableCell)(({ theme }) => ({
  color: theme.palette.grey[600],
  backgroundColor: theme.palette.grey[300],
  borderBottom: "none",
}));

function CartTableHeader({ titles }: ICartTableHeader) {
  return (
    <TableHead>
      <TableRow>
        {titles.map((title, index) => (
          <TableCellHeadStyled key={index} scope="col" size="medium" align={title.align}>
            {title.display}
          </TableCellHeadStyled>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default CartTableHeader;
