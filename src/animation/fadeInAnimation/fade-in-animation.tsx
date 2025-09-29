import { ReactNode } from 'react';
import styles from './fade-in-animation.css';
import { toClassNames } from '@/utils/toClassNames_utils';

export const FadeInAnimation = ({
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
        styles.fadeInAnimation,
      ])}
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationComplete}
    >
      {children}
    </div>
  );
};
