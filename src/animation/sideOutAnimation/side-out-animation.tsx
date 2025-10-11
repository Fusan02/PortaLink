import { ReactNode } from 'react';
import { toClassNames } from '@/utils/toClassNames_utils';

export const SideOutAnimation = ({
  className,
  onAnimationStart,
  onAnimationComplete,

  children,
}: {
  className?: string;
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;

  children: ReactNode;
}) => {
  return (
    <div
      className={toClassNames([
        className,
      ])}
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationComplete}
    >
      {children}
    </div>
  );
};
