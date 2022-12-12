import { Box, styled, Typography } from "@mui/material";
import { useRef } from "react";
import { Iconify } from "~/components";

interface AvatarFrameProps {
  src: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AvatarWrapper = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "144px",
  height: "144px",
  margin: "auto",
  overflow: "hidden",
  borderRadius: "50%",
  position: "relative",
  border: "1px dashed rgb(145 158 171 / 32%)",
}));

const UploadStyle = styled("div")(() => ({
  zIndex: 7,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  transition: "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  borderRadius: "50%",
  cursor: "pointer",
  width: "calc(100% - 16px)",
  height: "calc(100% - 16px)",
  "&:hover": {
    opacity: 0.8,
  },
}));

const AvatarStyle = styled(Box)(() => ({
  position: "absolute",
  width: "calc(100% - 16px)",
  height: "calc(100% - 16px)",
  borderRadius: "50%",
  zIndex: 5,
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transitions: "opacity 200ms",
  },
}));

function AvatarFrame({ src, onChange }: AvatarFrameProps) {
  const inputImageRef = useRef<HTMLInputElement>(null);
  return (
    <Box>
      <AvatarWrapper>
        {/* TODO: Tách phần uploader riêng, Img riêng */}
        <input accept="image/*" type="file" tabIndex={-1} hidden ref={inputImageRef} onChange={onChange} />
        {src && (
          <AvatarStyle>
            <Box component={"img"} src={src} alt="" />
          </AvatarStyle>
        )}
        <UploadStyle
          onClick={() => inputImageRef.current?.click()}
          sx={
            src
              ? { opacity: 0, color: "primary.contrastText", backgroundColor: (theme) => theme.palette.grey[900] }
              : {
                  opacity: 1,
                  color: (theme) => theme.palette.grey[500],
                  backgroundColor: (theme) => theme.palette.grey[100],
                }
          }
        >
          <Iconify
            icon="mdi:camera-plus"
            color="inherit"
            sx={{
              fontSize: 24,
            }}
          />
          <Typography variant="caption" color="inherit">
            Chọn ảnh
          </Typography>
        </UploadStyle>
      </AvatarWrapper>
      <Typography
        variant="caption"
        textAlign="center"
        sx={{ display: "block", color: "text.secondary", margin: "16px auto 0px" }}
      >
        {"Định dạng *.jpeg, *.jpg, *.png, *.gif"}
        <br />
        {"  dung lượng không quá 5 MB"}
      </Typography>
    </Box>
  );
}

export default AvatarFrame;
