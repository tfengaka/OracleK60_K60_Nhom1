import { FormLabel, RadioGroup } from "@mui/material";
import { Fragment } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface RHFRadioButtonProps {
  name: string;
  label: string;
  children: React.ReactNode;
}

function RHFRadioButton({ name, label, children }: RHFRadioButtonProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, ...restField } }) => (
        <Fragment>
          <FormLabel sx={{ fontSize: "13px", fontWeight: 500 }}>{label}</FormLabel>
          <RadioGroup {...restField} row={true} onChange={(e) => onChange(e.target.value)}>
            {children}
          </RadioGroup>
        </Fragment>
      )}
    />
  );
}

export default RHFRadioButton;
