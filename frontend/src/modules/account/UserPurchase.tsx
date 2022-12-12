import { useQuery } from "@apollo/client";
import { IconButton, Stack, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import moment from "moment";
import { Iconify, Page, PaperWrapper, Tag } from "~/components";
import { orderQuery } from "~/graphql/queries";
import { Order, PaginationData } from "~/models";
import { currencyFormat } from "~/utils/formats";
import { ITableHeadCell } from "../cart/CartTable";
import CartTableHeader from "../cart/components/CartTableHeader";

interface IOrder {
  item: Order;
}
interface OrderQuery {
  data: Order[];
  pagination?: PaginationData;
}

const tableHeadCols: ITableHeadCell[] = [
  { display: "Đơn hàng" },
  { display: "Ngày lập" },
  { display: "Số lượng", align: "center" },
  { display: "Thành tiền", align: "right" },
  { display: "Trạng thái", align: "center" },
  { display: "", align: "right" },
];

const TableItem = ({ item }: IOrder) => (
  <TableRow>
    <TableCell
      size="medium"
      sx={{
        display: "flex",
        borderBottom: "none",
      }}
    >
      <Stack spacing={0.5}>
        <Typography variant="subtitle2" fontWeight="bold" textOverflow="ellipsis">
          {item.orderDetails[0].product.name}
        </Typography>
        <Typography fontSize={12} fontWeight={500} textOverflow="ellipsis" color="grey">
          ID: {item.id}
        </Typography>
      </Stack>
    </TableCell>
    <TableCell size="medium" align="left">
      <Typography variant="subtitle2" fontWeight={600} textOverflow="ellipsis" sx={{ width: "100px" }}>
        {moment(item.createdAt).format("DD/MM/yyyy")}
      </Typography>
    </TableCell>
    <TableCell size="medium" align="center" sx={{ width: "100px" }}>
      <Typography variant="subtitle2" fontWeight={600} textOverflow="ellipsis">
        {item.quantity}
      </Typography>
    </TableCell>
    <TableCell size="medium" align="right" sx={{ fontWeight: 500 }}>
      {`${currencyFormat(Number(item.totalMoney))}đ`}
    </TableCell>
    <TableCell size="medium" align="center">
      <Tag color="success" title={item.deliveryStatus} />
    </TableCell>
    <TableCell size="medium" align="right" sx={{ width: "72px" }}>
      <IconButton color="default">
        <Iconify icon="ic:baseline-remove-red-eye" />
      </IconButton>
    </TableCell>
  </TableRow>
);

function UserPurchase() {
  const { loading, data } = useQuery<{ getListOrders: OrderQuery }>(orderQuery.GET_ORDER_LIST);
  const orderList = data?.getListOrders.data;

  return (
    <Page title="Lịch sử mua hàng">
      <PaperWrapper>
        <Table
          sx={{
            minWidth: 800,
          }}
        >
          <CartTableHeader titles={tableHeadCols} />
          <TableBody>
            {orderList && orderList.length > 0 && orderList.map((order) => <TableItem key={order.id} item={order} />)}
          </TableBody>
        </Table>
      </PaperWrapper>
    </Page>
  );
}

export default UserPurchase;
