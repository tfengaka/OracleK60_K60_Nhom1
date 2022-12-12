import { Step, StepConnector, stepConnectorClasses, StepIconProps, StepLabel, Stepper, styled } from "@mui/material";
import { Iconify } from "~/components";
import { steps } from "~/constants/checkout";

interface StepperProps {
  activeStep: number;
}

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#eaeaf0",
    borderTopWidth: 2,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(({ theme, ownerState }) => ({
  color: "#eaeaf0",
  display: "flex",
  alignItems: "center",
  height: 22,
  ...(ownerState.active && {
    color: theme.palette.primary.main,
  }),
  "& .QontoStepIcon-completedIcon": {
    color: theme.palette.primary.main,
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Iconify icon="ic:round-check" className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

export default function CheckoutStepper({ activeStep }: StepperProps) {
  return (
    <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
      {steps.map((label) => (
        <Step
          key={label}
          sx={{
            "& .MuiStepLabel-label": {
              fontSize: 14,
              fontWeight: 500,
              "&.Mui-active": {
                color: "primary.main",
                fontWeight: 600,
              },
              "&.Mui-completed": {
                color: "primary.main",
              },
            },
          }}
        >
          <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
