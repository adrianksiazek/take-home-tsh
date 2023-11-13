interface Button {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}
export interface ButtonProps extends Button {
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
}
export interface LinkButtonProps extends Button {
  href: string;
}
