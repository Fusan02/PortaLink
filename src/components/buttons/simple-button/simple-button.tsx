import { toClassNames } from '@/utils/toClassNames_utils';

export const Button = ({
    className,
    text,
    onClick,
    disabled,
}: {
    className?: string;
    text?: string;
    onClick?: () => void;
    disabled?: boolean;
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
        </button>
    );
};