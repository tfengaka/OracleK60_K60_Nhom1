import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface RHFTextFieldProps {
  name: string;
  label: string;
  type?: string;
  InputProps?: any;
}

export default function RHFTextField({ name, ...other }: RHFTextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
          error={!!error}
          helperText={error?.message}
          autoComplete="off"
          {...other}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                transition: "all 0.25s ease",
              },
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
            },
          }}
        />
      )}
    />
  );
}
