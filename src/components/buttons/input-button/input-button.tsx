import { toClassNames } from '@/utils/toClassNames_utils';

export const InputButton = ({
    className,
    id,
    type,
    value,
    onChange,
    placeholder,
}: {
    className?: string;
    id: string;
    type: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}) => {
    return (
        <input 
            className={toClassNames([
                className,
            ])}
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};