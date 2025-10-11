import { toClassNames } from '@/utils/toClassNames_utils';
import { ReactNode } from 'react';

export const Button = ({
    className,
    text,
    onClick,
    disabled,
    children,
}: {
    className?: string;
    text?: string;
    onClick?: () => void;
    disabled?: boolean;
    children?: ReactNode;
}) => {
    return (
        <button
            className={toClassNames([
                className,
            ])}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
            {children}
        </button>
    );
};