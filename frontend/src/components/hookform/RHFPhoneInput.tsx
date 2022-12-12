import { MuiTelInput } from "mui-tel-input";
import { Controller, useFormContext } from "react-hook-form";

interface RHFPhoneInputProps {
  name: string;
  label: string;
}

function RHFPhoneInput({ name, label }: RHFPhoneInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <MuiTelInput
          {...field}
          fullWidth
          label={label}
          defaultCountry={"VN"}
          helperText={error?.message}
          autoComplete="off"
          error={!!error}
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

export default RHFPhoneInput;
