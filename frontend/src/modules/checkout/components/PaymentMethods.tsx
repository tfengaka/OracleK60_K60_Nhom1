import {
  Box,
  CardContent,
  CardHeader,
  FormControlLabel,
  FormGroup,
  Paper,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { PaperWrapper } from "~/components";
import { paymentMethods } from "~/constants/checkout";
import { setPaymentMethod } from "~/redux/features/checkoutSlice";
import { useAppDispatch } from "~/redux/hooks";

function PaymentMethods() {
  const dispatch = useAppDispatch();
  const [activeMethod, setActiveMethod] = useState(paymentMethods[1].id);

  useEffect(() => {
    const method = paymentMethods.find((item) => item.id === activeMethod);
    dispatch(setPaymentMethod(method?.type || ""));
  }, [activeMethod]);

  const handleChange = (event: React.SyntheticEvent<Element, Event>) => {
    setActiveMethod((event.target as HTMLInputElement).value);
  };

  return (
    <PaperWrapper>
      <CardHeader title={<Typography variant="h6">Phương thức thanh toán</Typography>} />
      <CardContent>
        <FormGroup role="radiogroup">
          <Stack spacing={3}>
            {paymentMethods.map((method) => (
              <Paper variant="outlined" key={method.id} sx={{ p: 2 }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <FormControlLabel
                    checked={activeMethod === method.id}
                    value={method.id}
                    onChange={handleChange}
                    control={<Radio />}
                    label={
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {method.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {method.description}
                        </Typography>
                      </Box>
                    }
                  />
                  {method.icon && (
                    <Box
                      component="img"
                      src={method.icon}
                      alt={method.name}
                      sx={{
                        width: 100,
                        height: 50,
                        objectFit: "contain",
                      }}
                    />
                  )}
                </Stack>
              </Paper>
            ))}
          </Stack>
        </FormGroup>
      </CardContent>
    </PaperWrapper>
  );
}

export default PaymentMethods;
