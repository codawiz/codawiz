import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonStyle = {
  variant?: "default" | "outline" | "ghost" | "dark" | "accentOutline";
  size?: "default" | "lg" | "icon";
  className?: string;
};
function buttonClass({
  variant = "default",
  size = "default",
  className = "",
}: ButtonStyle) {
  return `button button-${variant} button-size-${size} ${className}`;
}
export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ComponentProps<typeof Link> & ButtonStyle) {
  return (
    <Link className={buttonClass({ variant, size, className })} {...props} />
  );
}
export function Button({
  variant,
  size,
  className,
  ...props
}: ComponentProps<"button"> & ButtonStyle) {
  return (
    <button className={buttonClass({ variant, size, className })} {...props} />
  );
}
