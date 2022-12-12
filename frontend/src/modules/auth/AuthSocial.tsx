import { Button, Divider, Stack, Typography } from "@mui/material";
import { Fragment } from "react";
import Iconify from "~/components/Iconify";

export default function AuthSocial() {
  return (
    <Fragment>
      <Stack direction="row" spacing={2}>
        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
          <Typography variant="button" sx={{ ml: 1 }}>
            Google
          </Typography>
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
          <Typography variant="button" sx={{ ml: 1 }}>
            Facebook
          </Typography>
        </Button>

        <Button fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={22} height={22} />
          <Typography variant="button" sx={{ ml: 1 }}>
            Twitter
          </Typography>
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Hoặc
        </Typography>
      </Divider>
    </Fragment>
  );
}
