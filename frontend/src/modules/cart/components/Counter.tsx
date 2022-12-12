import { styled, SxProps, Theme } from "@mui/material";
import { Iconify } from "~/components";

interface CounterProps {
  value: number;
  onUpdateValue: (value: number) => void;
  sx?: SxProps<Theme>;
}

const RootStyle = styled("div")(() => ({
  display: "flex",
  borderRadius: 4,
  border: "1px solid #d6e0ed",
  backgroundColor: "#f5f8fd",
  height: 30,
  width: 85,
}));
const CounterValue = styled("input")(({ theme }) => ({
  width: "100%",
  height: "100%",
  fontSize: "0.85rem",
  lineHeight: 1.1,
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  border: "none",
  textAlign: "center",
  padding: 5,
}));
const CounterButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "2rem",
  backgroundColor: theme.palette.action.hover,
  padding: "0 8px",
  height: "100%",
  border: "none",
  transition: theme.transitions.create("all"),
  cursor: "pointer",
}));
function Counter({ value, onUpdateValue, sx }: CounterProps) {
  const handleUpdateQuantity = (quantity: number) => {
    onUpdateValue(quantity);
  };

  return (
    <RootStyle sx={sx}>
      <CounterButton disabled={value <= 1} onClick={() => handleUpdateQuantity(value - 1)}>
        <Iconify icon="eva:minus-fill" />
      </CounterButton>
      <CounterValue
        type="number"
        value={value}
        required
        onChange={(event) => handleUpdateQuantity(Number(event.target.value))}
      />
      <CounterButton onClick={() => handleUpdateQuantity(value + 1)}>
        <Iconify icon="eva:plus-fill" />
      </CounterButton>
    </RootStyle>
  );
}

export default Counter;
