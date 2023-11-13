export interface CheckboxProps extends React.ComponentPropsWithRef<'input'> {
  label?: string;
  labelClass?: string;
  formControlClass?: string;
  onChange: () => void;
}
