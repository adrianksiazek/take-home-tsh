interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

export interface LinkButtonProps extends ButtonProps {
  href: string;
}
