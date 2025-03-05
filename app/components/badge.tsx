import clsx from "clsx";

type BadgeProps = {
  badgeText: string;
  className?: string;
  ariaLabel?: string;
};


export default function Badge({ badgeText, className, ariaLabel }: BadgeProps) {
  return (
    <div
      className={clsx(className)}
      role="status"
      aria-label={ariaLabel || badgeText}
    >
      <p>{badgeText}</p>
    </div>
  );
}
