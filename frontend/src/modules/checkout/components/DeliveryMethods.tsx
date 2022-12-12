import {
  Box,
  CardContent,
  CardHeader,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { PaperWrapper } from "~/components";
import { deliveryMethods } from "~/constants/checkout";
import { applyShipping } from "~/redux/features/checkoutSlice";
import { useAppDispatch } from "~/redux/hooks";
import { currencyFormat } from "~/utils/formats";

function DeliveryMethods() {
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState(deliveryMethods[0].id);

  useEffect(() => {
    const value = deliveryMethods.find((item) => item.id === selected);
    dispatch(applyShipping(value?.price || 0));
  }, [selected]);

  const handleChange = (event: React.SyntheticEvent<Element, Event>) => {
    setSelected((event.target as HTMLInputElement).value);
  };

  return (
    <PaperWrapper
      sx={{
        mb: 4,
      }}
    >
      <CardHeader title={<Typography variant="h6">Hình thức giao hàng</Typography>} />
      <CardContent>
        <FormGroup row role="radiogroup">
          <Grid container spacing={3}>
            {deliveryMethods.map((method) => (
              <Grid item xs={12} md={6} key={method.id}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <FormControlLabel
                    checked={selected === method.id}
                    onChange={handleChange}
                    value={method.id}
                    control={<Radio />}
                    label={
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box>
                          <Stack direction="row" spacing={1}>
                            <Typography variant="subtitle1" fontWeight={600}>
                              {method.name}
                            </Typography>
                            <Typography variant="subtitle2" fontWeight={600} color="textSecondary">
                              {method.price !== 0 ? `${currencyFormat(method.price)}đ` : "Miễn phí"}
                            </Typography>
                          </Stack>
                          <Typography variant="body2" color="textSecondary">
                            {method.description}
                          </Typography>
                        </Box>
                      </Box>
                    }
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </FormGroup>
      </CardContent>
    </PaperWrapper>
  );
}

export default DeliveryMethods;
