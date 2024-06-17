import { createContext, useContext, ReactNode } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  ControllerRenderProps,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";

interface IFormUIProps<T extends FieldValues> {
  children: ReactNode;
  form: UseFormReturn<T>;
}

interface IFormContext<T extends FieldValues> {
  form?: UseFormReturn<T>;
}

const FormContext = createContext<IFormContext<any>>({});

export const FormUI = <T extends FieldValues>({
  children,
  form,
}: IFormUIProps<T>) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormContext.Provider value={{ form }}>{children}</FormContext.Provider>
      </form>
    </Form>
  );
};

interface IFieldsProps {
  children: (props: ControllerRenderProps<any, string>) => React.ReactNode;
  name: string;
}

const Fields = ({ children, name }: IFieldsProps) => {
  const { form } = useContext(FormContext);
  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>{children(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

FormUI.Field = Fields;
