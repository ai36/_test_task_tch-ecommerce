import { Icon } from "@/components";
import { clsx } from "@/utils";
import styles from "./button.module.css";

export const Button = ({
  className,
  type,
  href,
  text,
  icon,
  variant = "primary",
  ...props
}) => {
  return href ? (
    <a className={clsx(styles.button, className, styles[variant])} href={href} {...props}>
      {text}
      {icon && <Icon name={icon} />}
    </a>
  ) : (
    <button className={clsx(styles.button, className, styles[variant])} type={!type ? "button" : type} {...props}>
      {text}
      {icon && <Icon name={icon} />}
    </button>
  );
};
