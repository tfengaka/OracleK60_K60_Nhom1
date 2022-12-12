import { FormProvider as Form, UseFormReturn } from "react-hook-form";

interface IFormProvider {
  children: React.ReactNode;
  methods: UseFormReturn<any>;
  onSubmit?: () => void;
}

export default function FormProvider({ children, onSubmit, methods }: IFormProvider) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}
