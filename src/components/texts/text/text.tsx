import { toClassNames } from '@/utils/toClassNames_utils';
import styles from './text.css';

export const Texts = ({
    className,
    text,
}: {
    className?: string;
    text: string;
}) => {
    return (
        <p
            className={toClassNames([
                styles.text,
                className,
            ])}
        >
            {text}
        </p>
    );
};