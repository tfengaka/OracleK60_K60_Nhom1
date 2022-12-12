import { CircularProgress, styled } from "@mui/material";

const LoadingWrapperStyle = styled("div")(() => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export default function PreLoading() {
  return (
    <LoadingWrapperStyle>
      <CircularProgress />
    </LoadingWrapperStyle>
  );
}
